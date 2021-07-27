const { ResolveStart } = require("@angular/router");
const Role = require("../models/role");
const Workspace = require("../models/workspace");

exports.deleteRole = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const owner = await Role.findOne({ workspace: req.params.id, user: current_user_id, role: "owner" });
        const role = await Role.findOne({ workspace: req.params.id, user: current_user_id });

        if (owner || !owner && role) {
            if (owner) {
                const role = await Role.findOne({ workspace: req.params.id, user: current_user_id, role: "admin" }).exec();
                if (!role) {
                    await Workspace.deleteOne({ _id: req.params.id });
                    await Role.deleteMany({ workspace: req.params.id });
                } else {
                    const new_owner = new Post({
                        _id: req.body.id,
                        user: role.user,
                        workspace: req.params.id,
                        role: 'owner'
                    });
                    await Role.updateOne({ _id: req.params.id, creator: req.userData.userId }, new_owner);
                    await Role.deleteOne({ workspace: req.params.id, user: current_user_id });
                }
            }

            res.status(200).json({ message: "Role deletion successful!" });
        } else if (!role) {
            res.status(401).json({ message: "Not authorized!" });
        }
    } catch (err) {
        res.status(500).json({
            message: "Deleting a role failed!"
        });
    }
    //             res.status(200).json({ message: "Deletion successful!" });
    //         } else {
    //             res.status(401).json({ message: "Not authorized!" });


};
