const { Workspace, Role, Invitation, Datafile, Test, User, Activity } = require("../models");

exports.getActivityByUser = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ user: req.params.userId });

        if (!roles.length > 1) {
            return res.status(500).json({
                message: "Fetching the role for that user failed!"
            });
        }
        if (req.params.userId !== current_user_id) {
            return res.status(403).json({
                message: "You are not authorized to fetch the activity of another user!"
            });
        }
        var workspace_ids = roles.map(function(elem) { //sacamos todos los workspaces del user 
            return elem.workspace.toString();
        });
        workspace_ids = [...new Set(workspace_ids)];
        const activities = await Activity.find({ 'workspace.id': { $in: workspace_ids } }).sort({ creationMoment: -1 }).limit(5);
        return res.status(200).json({
            message: "Activities fetched successfully!",
            activities: activities,

        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching activities failed!"
        });
    }
};

exports.deleteActivitiesByUser = async(req, res, next) => {

}