const { GlobalConfiguration } = require("../models");

exports.getGlobalConfiguration = async(req, res, next) => {
    try {
        const globalConfigurations = await GlobalConfiguration.find();
        if (globalConfigurations.length !== 1) {
            return res.status(500).json({
                message: "Fetching (unique) global configuration failed!"
            });
        }
        return res.status(200).json({
            message: "Global Configuration fetched successfully!",
            globalConfiguration: globalConfigurations[0],
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching global configuration failed!"
        });
    }
}

exports.updateGlobalConfiguration = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const globalConfigurations = await GlobalConfiguration.find();
        if (globalConfigurations.length !== 1) {
            return res.status(500).json({
                message: "Updating global configuration failed!"
            });
        }
        var globalConfig = globalConfigurations[0];
        globalConfig.limitUsers = req.body.limitUsers;
        globalConfig.limitWorkspaces = req.body.limitWorkspaces;
        await GlobalConfiguration.findByIdAndUpdate(globalConfig._id, globalConfig);
        const updatedGlobalConfig = await GlobalConfiguration.findById(globalConfig._id);
        return res.status(200).json({
            message: "Update successful!",
            globalConfiguration: updatedGlobalConfig
        });

    } catch (err) {
        return res.status(500).json({
            message: "Updating global configuration failed!"
        });
    }
}