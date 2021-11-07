const { ResolveStart } = require("@angular/router");
const { Role, Workspace } = require("../models");

exports.deleteRole = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const role = await Role.findOne({ workspace: req.params.workspaceId, user: current_user_id });
        const owners = await Role.findOne({ workspace: req.params.workspaceId, role: 'owner' });
        if (role.role === 'owner' && owners < 1) {//onleave
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
