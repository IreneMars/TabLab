const { Workspace, Role, Invitation, Datafile, Test, User, Activity, GlobalConfiguration } = require("../models");

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

        var workspaces = await workspaceQuery.exec();

        for (var workspace of workspaces) {
            const roles = await Role.find({ workspace: workspace._id });
            var user_ids = roles.map(function(elem) {
                return elem.user.toString();
            });
            const users = await User.find({ '_id': { $in: user_ids } });
            var user_updated = users.map(function(elem) {
                return { "id": elem._id, "photo": elem.photo };
            });
            workspace._doc['users'] = user_updated;
        }

        return res.status(200).json({
            message: "Workspaces fetched successfully!",
            workspaces: workspaces,
            maxWorkspaces: workspaces.length,
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
        const user = await User.findById(current_user_id);

        if (roles.length !== 1 && user.role !== 'ADMIN') {
            return res.status(403).json({
                message: "Not authorized to fetch this workspace!"
            });
        }
        const workspace = await Workspace.findById(req.params.id);

        return res.status(200).json({
            message: "Workspace fetched successfully!",
            workspace: workspace,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a workspace failed!"
        });
    }
};

exports.createWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const configurations = await GlobalConfiguration.find();
        const configuration = configurations[0];
        const roles = await Role.find({ user: current_user_id });
        if (roles.length === configuration.limitWorkspaces) {
            return res.status(500).json({
                message: `You are not allowed to be in more than ${configuration.limitWorkspaces} workspaces`
            });
        }
        const workspace = new Workspace({
            title: req.body.title,
            description: req.body.description,
            creationMoment: null,
            mandatory: false,
            owner: current_user_id
        });
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
                workspace: createdWorkspace._id,
                workspaceTitle: createdWorkspace.title,
                author: current_user_id,
                authorName: user.name,
                coleccion: null,
                coleccionTitle: null,
                datafile: null,
                datafileTitle: null,
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
            workspace: updatedWorkspace._id,
            workspaceTitle: updatedWorkspace.title,
            author: current_user_id,
            authorName: user.name,
            coleccion: null,
            coleccionTitle: null,
            datafile: null,
            datafileTitle: null,
            creationMoment: null
        });
        await activity.save();

        return res.status(200).json({
            message: "Workspace updated successfully!",
            workspace: updatedWorkspace
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
        const roles = Role.find({ workspace: req.params.id, user: current_user_id, role: "owner" });
        const user = await User.findById(current_user_id);

        if (roles.length !== 1 && user.role !== 'ADMIN') {
            return res.status(401).json({
                message: "You are not authorized to delete that workspace!"
            });
        }
        const workspace = await Workspace.findById(req.params.id);
        if (workspace.mandatory) {
            return res.status(403).json({
                message: "You are not authorized to delete that workspace!"
            });
        }
        const workspaceTitle = workspace.title;

        await Role.deleteMany({ workspace: req.params.id });
        await Datafile.deleteMany({ workspace: req.params.id });
        await Activity.deleteMany({ 'workspace.id': req.params.id });
        await Workspace.deleteOne({ _id: req.params.id });

        const activity = new Activity({
            message: "{{author}} eliminó el espacio de trabajo {{workspace}}",
            workspace: null,
            workspaceTitle: workspaceTitle,
            author: current_user_id,
            authorName: user.name,
            coleccion: null,
            coleccionTitle: null,
            datafile: null,
            datafileTitle: null,
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