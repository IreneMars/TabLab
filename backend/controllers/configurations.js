const { Role, Configuration, Datafile } = require("../models");

exports.getConfigurationsByDatafile = async(req, res) => {
    try {
        const configurations = await Configuration.find({ 'datafile': req.params.datafileId });
        return res.status(200).json({
            message: "Configurations fetched successfully!",
            configurations: configurations,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching configurations failed!"
        });
    }
};

exports.getConfiguration = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const configuration = await Configuration.findById(req.params.id);
        const datafile = await Datafile.findById(configuration.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Fetching a configuration failed!"
            });
        }
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "Not authorized to fetch this configuration!"
            });
        }
        // var extraParams = null;
        // if (configuration.extraParams) {
        //     extraParams = {};
        //     for (elem of configuration.extraParams) {

        //         extraParams[elem[0]] = elem[1]
        //     }

        // }
        return res.status(200).json({
            message: "Sucessful fetch!",
            configuration: configuration,
            // extraParams: extraParams
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a configuration failed!",
        });
    }
};

exports.createConfiguration = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafile = await Datafile.findById(req.body.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Creating a configuration failed!"
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "Not authorized to create a configuration inside this workspace!"
            });
        }
        const configuration = new Configuration({
            title: req.body.title,
            creationMoment: null,
            errorCode: req.body.errorCode,
            extraParams: req.body.extraParams,
            datafile: req.body.datafile
        });
        await configuration.save();
        return res.status(201).json({
            message: "Configuration created!",
            configuration: configuration
        });
    } catch (err) {
        return res.status(500).json({
            message: "Creating a configuration failed!"
        });
    }
};

exports.updateConfiguration = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const configuration = await Configuration.findById(req.params.id);
        const datafile = await Datafile.findById(configuration.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Updating a configuration failed!"
            });
        }
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to update a configuration from this workspace."
            });
        }
        configuration.title = req.body.title;
        configuration.errorCode = req.body.errorCode;
        configuration.extraParams = req.body.extraParams;
        await Configuration.findByIdAndUpdate(req.params.id, configuration);
        const updatedConfiguration = await Configuration.findById(req.params.id);
        return res.status(200).json({
            message: "Configuration updated successfully!",
            configuration: updatedConfiguration
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating a configuration failed!"
        });
    }
};

exports.deleteConfiguration = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const configuration = await Configuration.findById(req.params.id);
        const datafile = await Datafile.findById(configuration.datafile);
        if (!datafile) {
            return res.status(401).json({
                message: "Deleting a configuration failed!"
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to delete a configuration from this workspace."
            });
        } else {
            await Configuration.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: "Configuration deleted successfully!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Deleting a configuration failed!"
        });
    }

};