const { Role, Workspace, GlobalConfiguration } = require("../models");

exports.createRole = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const configurations = await GlobalConfiguration.find();
        const configuration = configurations[0];
        const roles = await Role.find({ workspace: req.body.workspace });
        if (roles.length === configuration.limitUsers) {
            return res.status(500).json({
                message: `This workspace is not allowed to have more than ${configuration.limitUsers} users!`
            });
        }
        if (req.body.user !== current_user_id) {
            return res.status(500).json({
                message: "You cannot accept an invitation that is not yours!"
            });
        }

        const role = new Role({
            role: "member",
            workspace: req.body.workspace,
            user: req.body.user,
        });
        const createdRole = await role.save();
        return res.status(201).json({
            message: "Role created successfully!",
            role: createdRole
        });
    } catch (err) {
        res.status(500).json({
            message: "Creating a role failed!"
        });
    }
};

exports.updateRole = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const role = await Role.findById(req.params.id);
        const current_user_role = await Role.findOne({ 'user': current_user_id, 'workspace': req.body.workspace });
        const owners = await Role.find({ workspace: req.body.workspace, role: 'owner' });

        if (current_user_role.role === 'owner' && current_user_role.role === role.role && owners.length === 1) {
            return res.status(403).json({
                message: "You are not allowed to leave this workspace without an owner!"
            });
        }
        if (current_user_role.role === 'member' || (current_user_role.role === 'admin' && (role.role === 'owner' || role.role === 'admin'))) {
            return res.status(403).json({
                message: "You are not allowed to update this role!"
            });
        }
        await Role.findByIdAndUpdate(req.params.id, { role: req.body.role });
        const updatedRole = await Role.findById(req.params.id);
        return res.status(200).json({
            message: "Update successful!",
            role: updatedRole
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating a role failed!"
        });
    }
};

exports.deleteRole = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const role = await Role.findOne({ workspace: req.params.workspaceId, user: current_user_id });
        const owners = await Role.find({ workspace: req.params.workspaceId, role: 'owner' });
        if (role.role === 'owner' && owners.length === 1) { //onleave
            return res.status(403).json({
                message: "You are not allowed to leave this workspace without an owner!"
            });
        } else {
            await Role.deleteOne({ workspace: req.params.workspaceId, user: current_user_id });
            return res.status(200).json({
                message: "Role deletion successful!"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Deleting a role failed!"
        });
    }
};