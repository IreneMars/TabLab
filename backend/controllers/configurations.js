const Role = require("../models/role");
const Configuration = require("../models/configuration");
const Datafile = require("../models/datafile");

exports.createConfiguration = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ '_id': req.params.datafileId });
        if (datafiles.length === 1) {
            const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });
            if (roles.length === 1) {

                const configuration = new Configuration({
                    title: req.body.title,
                    creationMoment: null,
                    errorCode: req.body.errorCode,
                    extraParams: req.body.extraParams,
                    datafile: req.params.datafileId
                });
                await configuration.save(function(err, createdConfiguration) {
                    return res.status(201).json({
                        message: "Configuration added successfully!",
                        configuration: {
                            ...createdConfiguration,
                            id: createdConfiguration._id
                        }
                    });
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            message: "Creating a configuration failed!"
        });
    }
};

exports.deleteConfiguration = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const configurations = await Configuration.find({ _id: req.params.id }).exec();
        if (configurations.length === 1) {
            const datafiles = await Datafile.find({ '_id': configurations[0].datafile });

            if (datafiles.length === 1) {
                const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });

                if (roles.length === 1) {
                    await Configuration.deleteOne({ _id: req.params.id });
                    return res.status(200).json({ message: "Configuration deletion successful!" });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(401).json({
                    message: "Deleting a configuration failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Deleting an esquema failed!"
            });
        }

    } catch (err) {
        return res.status(500).json({
            message: "Deleting an esquema failed!"
        });
    }

};

exports.getConfiguration = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const configurations = await Configuration.find({ _id: req.params.id }).exec();
        if (configurations.length === 1) {
            const datafiles = await Datafile.find({ _id: configurations[0].datafile }).exec();
            if (datafiles.length === 1) {
                const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
                if (roles.length === 1) {
                    return res.status(200).json({
                        configuration: configurations[0]
                    });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(500).json({
                    message: "Fetching a configuration failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Fetching a configuration failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a configuration failed!"
        });
    }
};

exports.updateConfiguration = async(req, res, next) => {
    console.log(req.body);
    current_user_id = req.userData.userId;
    try {
        const configurations = await Configuration.find({ _id: req.params.id }).exec();
        if (configurations.length === 1) {
            const datafiles = await Datafile.find({ _id: configurations[0].datafile }).exec();
            if (datafiles.length === 1) {
                const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
                if (roles.length === 1) {

                    const configuration = new Configuration({
                        _id: req.params.id,
                        title: req.body.title,
                        creationMoment: null,
                        errorCode: req.body.errorCode,
                        extraParams: req.body.extraParams,
                        datafile: req.params.datafileId
                    });
                    console.log(configuration);
                    Configuration.updateOne({ _id: req.params.id }, configuration).then(result => {
                        if (result.n > 0) {
                            return res.status(200).json({ message: "Update successful!" });
                        } else {
                            return res.status(401).json({ message: "Not authorized!" });
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(500).json({
                    message: "Updating a configuration failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Updating a configuration failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a configuration failed!"
        });
    }
};
