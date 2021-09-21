const Workspace = require("../models/workspace");
const Role = require("../models/role");
const Invitation = require("../models/invitation");
const Datafile = require("../models/datafile");
const Test = require("../models/test");

const User = require("../models/user");

exports.createWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    const workspace = new Workspace({
        title: req.body.title,
        description: req.body.description,
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
            console.log('invitEmail');
            console.log(invitEmail);
            const receivers = await User.find({ "email": invitEmail }).exec();
            console.log('receivers');
            console.log(receivers);
            if (receivers.length === 0) {
                await Workspace.deleteOne({ "_id": createdWorkspace._id });
                await Role.deleteOne({ "_id": createdRole._id });
                return res.status(500).json({
                    message: `The invited user with email ${invitEmail} does not exist.`
                });
            } else if (receivers.length > 1) {
                Workspace.deleteOne({ "_id": createdWorkspace._id });
                Role.deleteOne({ "_id": createdRole._id });
                return res.status(500).json({
                    message: `There are several users with the email ${invitEmail}`
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
        }

        postData = {
            workspace: createdWorkspace,
            role: createdRole,
            invitations: savedInvitations
        };
        console.log('Post Data');
        console.log(postData);
        return res.status(201).json({
            message: "Workspace added successfully",
            post: postData
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
        const workspaces = await Workspace.find({ _id: req.params.id }).exec();
        const roles = await Role.find({ workspace: req.params.id, user: current_user_id }).exec();
        if (workspaces.length === 0 || workspaces.length > 1) {
            return res.status(401).json({ message: "There is no unique workspace with that id!" });
        } else if (roles.length === 0 || roles.length > 1) {
            return res.status(401).json({ message: "There is no unique user that could perform that task!" });
        } else if (workspaces.length === 1 && roles.length === 1) {
            const workspace = new Workspace({
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                mandatory: workspaces[0].mandatory,
            });
            Workspace.updateOne({ _id: req.params.id }, workspace).then(result => {
                if (result.n > 0) {
                    return res.status(200).json({ message: "Update successful!" });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Updating a workspace failed!"
        });
    }
};

exports.getWorkspaces = async(req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const current_user_id = req.userData.userId;
    console.log("Get Workspaces");
    try {
        const roles = await Role.find({ user: current_user_id });
        var workspace_ids = roles.map(function(elem) {
            return elem.workspace.toString();
        }); // { role: 'owner', workspace: '60aeaf40d0e8477348250ac9', user: '60ad88d2a74d2e58cc611a3f' },
        workspace_ids = [...new Set(workspace_ids)];

        const postQuery = Workspace.find({ '_id': { $in: workspace_ids } });
        if (pageSize && currentPage) {
            postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
        }

        postQuery
            .then(documents => {
                return res.status(200).json({
                    message: "Workspaces fetched successfully!",
                    workspaces: documents,
                    maxWorkspaces: documents.length
                });
            })
            .catch(error => {
                return res.status(500).json({
                    message: "Fetching workspaces failed!"
                });
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
        if (roles.length === 1) {
            const workspaces = await Workspace.find({ _id: req.params.id });
            if (workspaces.length === 1) {
                const orphanedDatafiles = await Datafile.find({ "workspace": req.params.id, "coleccion": null });
                const datafiles = await Datafile.find({ "workspace": req.params.id });
                var datafileIds = [];
                var datafilesWTests = [];
                for (var datafile of datafiles) {
                    const tests = await Test.find({ datafile: datafile._id });
                    if (tests.length > 0) {
                        datafilesWTests.push({ datafile: datafile, tests: tests });
                        datafileIds.push(datafile._id);
                    }
                }
                console.log(datafileIds);
                const tests = await Test.find({ datafile: { $in: datafileIds } });

                return res.status(200).json({
                    workspace: workspaces[0],
                    orphanedDatafiles: orphanedDatafiles,
                    datafiles: datafilesWTests,
                    tests: tests
                });
            } else {
                return res.status(404).json({ message: "Workspace not found!" });
            }
        } else {
            return res.status(500).json({
                message: "Fetching a workspace failed! The current user does not have that workspace!"
            });

        }
    } catch (err) {

        return res.status(500).json({
            message: "Fetching a workspace failed!"
        });
    }
};

exports.deleteWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const role = Role.findOne({ workspace: req.params.id, user: current_user_id, role: "owner" });
        if (!role) {
            return res.status(401).json({ message: "Not authorized!" });
        } else {
            await Role.deleteMany({ workspace: req.params.id });
            await Workspace.deleteOne({ _id: req.params.id });
            return res.status(200).json({ message: "Workspace deletion successful!" });
        }

    } catch (err) {
        return res.status(500).json({
            message: "Deleting a workspace failed!"
        });
    }
};