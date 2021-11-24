const { Workspace, Role, Invitation, Datafile, Test, User, Activity } = require("../models");

exports.getActivityByUser = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ user: req.params.userId });

        if (!roles.length >= 1) {
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
        const activities = await Activity.find({ 'workspace': { $in: workspace_ids } }).sort({ creationMoment: -1 }).limit(10);
        var activity_ids = activities.map(function(elem) { //sacamos todos los workspaces del user 
            return elem._id.toString();
        });
        const activitiesFromCurrentUser = await Activity.find({ 'author': req.params.userId }).sort({ creationMoment: -1 }).limit(10);
        for (var activity of activitiesFromCurrentUser) {
            if (!activity_ids.includes(activity._id.toString())) {
                activities.push(activity)
            }
        }

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

exports.getActivityByWorkspace = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ user: current_user_id });

        if (!roles.length > 1) {
            return res.status(500).json({
                message: "Fetching the role for that user failed!"
            });
        }

        const activities = await Activity.find({ 'workspace': req.params.workspaceId }).sort({ creationMoment: -1 }).limit(10);

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

// exports.deleteActivitiesByUser = async(req, res, next) => {

// }