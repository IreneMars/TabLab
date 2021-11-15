const { Role, Workspace } = require("../models");

exports.createRole = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {

        if (req.body.user !== current_user_id) {
            return res.status(500).json({
                message: "You cannot accept an invitation that is not yours!"
            });
        }

        const role = new Role({
            role: null,
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
        const current_user_role = await Role.find({ 'user': current_user_id });

        if (current_user_role === 'member' || (current_user_role === 'admin' && (role.role === 'owner' || role.role === 'admin'))) {
            return res.status(403).json({
                message: "You are not allowed to update a role!"
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
        const owners = await Role.findOne({ workspace: req.params.workspaceId, role: 'owner' });
        if (role.role === 'owner' && owners.length === 1) { //onleave
            await Workspace.deleteOne({ _id: req.params.workspaceId });
            await Role.deleteMany({ workspace: req.params.workspaceId });
            return res.status(200).json({
                message: "Role deletion (and workspace) successful!"
            });
        } else {
            //await Role.updateOne({ _id: req.params.id, creator: req.userData.userId }, new_owner);
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