const { Workspace, Role, Invitation, Datafile, Test, User, Activity } = require("../models");

exports.getWorkspaces = async(req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ user: current_user_id });

        var workspace_ids = roles.map(function(elem) {
            return elem.workspace.toString();
        });
        workspace_ids = [...new Set(workspace_ids)];

        const workspaceQuery = Workspace.find({ '_id': { $in: workspace_ids } });
        const allWorkspaces = await workspaceQuery.exec();

        if (pageSize && currentPage) {
            workspaceQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
        }

        var documents = await workspaceQuery.exec();
        for (doc in documents) {
            const roles = await Role.find({ workspace: documents[doc]._id });
            var user_ids = roles.map(function(elem) {
                return elem.user.toString();
            });
            const users = await User.find({ '_id': { $in: user_ids } });
            var user_updated = users.map(function(elem) {
                return { "id": elem._id, "photo": elem.photo };
            });
            documents[doc]._doc['users'] = user_updated;
        }

        return res.status(200).json({
            message: "Workspaces fetched successfully!",
            workspaces: documents,
            maxWorkspaces: documents.length,
            totalWorkspaces: allWorkspaces.length
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching workspaces failed!"
        });
    }
};

exports.getWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ workspace: req.params.id, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "Not authorized to fetch this workspace!"
            });
        }
        const workspace = await Workspace.findById(req.params.id);
        const orphanedDatafiles = await Datafile.find({ "workspace": req.params.id, "coleccion": null });
        const datafiles = await Datafile.find({ "workspace": req.params.id });
        var datafileIds = [];
        var datafilesWTests = [];
        for (var datafile of datafiles) {
            const tests = await Test.find({ datafile: datafile._id });
            if (tests.length > 0) {
                datafile._doc['tests'] = [];
                for (var test of tests) {
                    const testMap = new Map();
                    testMap.set('id', test._id);
                    testMap.set('title', test.title);
                    datafile._doc['tests'].push(testMap);
                    datafilesWTests.push(datafile);
                    datafileIds.push(datafile._id);
                }
            }
        }
        const tests = await Test.find({ datafile: { $in: datafileIds } });
        return res.status(200).json({
            message: "Workspace fetched successfully!",
            workspace: workspace,
            orphanedDatafiles: orphanedDatafiles,
            datafilesWTests: datafilesWTests,
            tests: tests
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a workspace failed!"
        });
    }
};

exports.createWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    const workspace = new Workspace({
        title: req.body.title,
        description: req.body.description,
        creationMoment: null,
        mandatory: false,
    });
    try {
        const createdWorkspace = await workspace.save();
        const role = new Role({
            role: 'owner',
            workspace: createdWorkspace._id,
            user: current_user_id
        });
        const createdRole = await role.save();
        var savedInvitations = [];

        for (const invitEmail of req.body.invitations) {

            const receivers = await User.find({ "email": invitEmail });

            if (receivers.length !== 1) {
                await Workspace.deleteOne({ "_id": createdWorkspace._id });
                await Role.deleteOne({ "_id": createdRole._id });
                return res.status(500).json({
                    message: `The invited user with email ${invitEmail} does not exist.`
                });
            }
            const invitation = new Invitation({
                sender: current_user_id,
                receiver: receivers[0]._id,
                status: 'pending',
                workspace: createdWorkspace._id,
            });

            const savedInvitation = await invitation.save();
            savedInvitations.push(savedInvitation);

            const user = await User.findById(current_user_id);
            const activity = new Activity({
                message: "{{author}} creó el espacio de trabajo {{workspace}}",
                workspace: { 'id': createdWorkspace._id, 'title': createdWorkspace.title },
                author: { 'id': current_user_id, 'name': user.name },
                coleccion: null,
                datafile: null,
                creationMoment: null
            });
            await activity.save();

        }
        return res.status(201).json({
            message: "Workspace added successfully",
            workspace: createdWorkspace,
            role: createdRole,
            invitations: savedInvitations
        });
    } catch (err) {
        res.status(500).json({
            message: "Creating a workspace (and a role) failed!"
        });
    }
};

exports.updateWorkspace = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const workspace = await Workspace.findById(req.params.id);
        const role = await Role.findOne({ workspace: req.params.id, user: current_user_id });
        if (!role) {
            return res.status(401).json({
                message: "You are not authorized to update this workspace!"
            });
        }
        workspace.title = req.body.title;
        workspace.description = req.body.description;
        await Workspace.findByIdAndUpdate(req.params.id, workspace);
        const updatedWorkspace = await Workspace.findById(req.params.id);

        const user = await User.findById(current_user_id);
        const activity = new Activity({
            message: "{{author}} modificó el espacio de trabajo {{workspace}}",
            workspace: { 'id': updatedWorkspace._id, 'title': updatedWorkspace.title },
            author: { 'id': current_user_id, 'name': user.name },
            coleccion: null,
            datafile: null,
            creationMoment: null
        });
        await activity.save();

        return res.status(200).json({
            message: "Workspace updated successfully!",
            user: updatedWorkspace
        });
    } catch (err) {
        res.status(500).json({
            message: "Updating a workspace failed!"
        });
    }
};

exports.deleteWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const role = Role.findOne({ workspace: req.params.id, user: current_user_id, role: "owner" });
        if (!role) {
            return res.status(401).json({
                message: "You are not authorized to delete that workspace!"
            });
        }
        const workspace = Workspace.findById(req.params.id);
        if (workspace.mandatory) {
            return res.status(403).json({
                message: "You are not authorized to delete that workspace!"
            });
        }
        await Role.deleteMany({ workspace: req.params.id });
        await Workspace.deleteOne({ _id: req.params.id });

        const user = await User.findById(current_user_id);
        const activity = new Activity({
            message: "{{author}} eliminó el espacio de trabajo {{workspace}}",
            workspace: { 'id': workspace._id, 'title': workspace.title },
            author: { 'id': current_user_id, 'name': user.name },
            coleccion: null,
            datafile: null,
            creationMoment: null
        });
        await activity.save();

        return res.status(200).json({
            message: "Workspace deletion successful!"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Deleting a workspace failed!"
        });
    }
};