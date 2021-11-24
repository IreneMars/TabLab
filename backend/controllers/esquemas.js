const { Role, Esquema, Datafile } = require("../models");

const fs = require('fs');

exports.getEsquemasByDatafile = async(req, res) => {
    try {
        const esquemas = await Esquema.find({ 'datafile': req.params.datafileId });

        return res.status(200).json({
            message: "Esquemas fetched successfully!",
            esquemas: esquemas,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching esquemas failed!"
        });
    }
};

exports.getEsquema = async(req, res, next) => {

    const current_user_id = req.userData.userId;
    try {
        const esquema = await Esquema.findById(req.params.id);
        const datafile = await Datafile.findById(esquema.datafile);
        if (!datafile) {
            return res.status(404).json({
                message: "Fetching the datafile associated to this esquema failed!"
            });
        }
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });

        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to fetch this esquema."
            });
        }
        const url = req.protocol + "://" + req.get("host") + "/";
        actualFilePath = esquema.contentPath.replace(url, 'backend/uploads/');

        fs.readFile(actualFilePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({
                    message: "Fetching an esquema failed!",
                    error: err
                });
            } else {
                return res.status(200).json({
                    message: "Esquema fetched successfully!",
                    esquema: esquema,
                    content: data
                });
            }
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching an esquema failed!"
        });
    }
};

exports.createEsquema = async(req, res, next) => {

    const current_user_id = req.userData.userId;

    try {
        var title = req.body.title;
        if (req.body.operation === "infer") {
            title = "Inferred esquema - " + req.body.title;
        }
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to create an esquema from this workspace."
            })
        }
        const esquema = new Esquema({
            title: title,
            contentPath: req.body.contentPath,
            creationMoment: null,
            datafile: req.body.datafile
        });

        const createdEsquema = await esquema.save();

        return res.status(201).json({
            message: "Esquema added successfully!",
            esquema: createdEsquema
        });
    } catch (err) {
        return res.status(500).json({
            message: "Creating an esquema failed!"
        });
    }
};

exports.updateEsquema = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const esquema = await Esquema.findById(req.params.id);
        const datafile = await Datafile.findById(esquema.datafile);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to update an esquema from this workspace."
            });
        }

        await Esquema.findByIdAndUpdate(req.params.id, { title: req.body.title });
        updatedEsquema = await Esquema.findById(req.params.id);
        return res.status(200).json({
            message: "Update successful!",
            esquema: updatedEsquema
        });

    } catch (err) {
        return res.status(500).json({
            message: "Updating an esquema failed!"
        });
    }
};

exports.deleteEsquema = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const esquema = await Esquema.findById(req.params.id);
        const datafile = await Datafile.findById(esquema.datafile);

        if (!datafile) {
            return res.status(404).json({
                message: "Deleting an esquema failed! The datafile associated to it was not found"
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });

        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to delete an esquema from this workspace."
            })
        }
        fs.unlinkSync(esquema.contentPath);
        await Esquema.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            message: "Esquema deletion successful!"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Deleting an esquema failed!"
        });
    }
};