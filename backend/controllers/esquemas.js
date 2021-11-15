const { Role, Esquema, Datafile } = require("../models");

const fs = require('fs');
const bufferedSpawn = require('buffered-spawn');

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
        fs.readFile(esquema.contentPath, 'utf8', (err, data) => {
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
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to create an esquema from this workspace."
            })
        }
        if (req.body.contentPath) { // Manual creation
            fs.writeFile(req.body.contentPath, req.body.esquemaContent, err => {
                if (err) {
                    return res.status(500).json({
                        message: "Creating an esquema failed!",
                        error: err
                    });
                }
            });
            const esquema = new Esquema({
                title: req.body.title,
                contentPath: req.body.contentPath,
                creationMoment: null,
                datafile: req.body.datafile
            });
            const createdEsquema = await esquema.save();
            return res.status(201).json({
                message: "Esquema added successfully!",
                esquema: createdEsquema
            });
        } else if (!req.body.contentPath && datafile.contentPath) { // Infer creation
            const fileName = 'inferred_schema' + "-" + Date.now() + '.yaml';
            const localPath = 'backend/uploads/esquemas/' + fileName;
            bufferedSpawn('python', ["backend/scripts/infer_esquema.py", datafile.contentPath, fileName])
                .then((output) => {
                    // send data to browser
                    const esquema = new Esquema({
                        title: req.body.title,
                        contentPath: localPath,
                        creationMoment: null,
                        datafile: req.body.datafile
                    });
                    const createdEsquema = esquema.save();
                    return res.status(201).json({
                        message: "Esquema inferred successfully",
                        esquema: createdEsquema
                    });
                }, (err) => {
                    return res.status(500).json({
                        message: "Inferring an esquema failed!",
                    });
                });
        } else if (!req.body.contentPath && !datafile.contentPath) {
            return res.status(500).json({
                message: "There is no content to infer an esquema!"
            });
        }
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
        fs.unlink(req.body.contentPath, (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Updating (deleting old one) an esquema failed!",
                    error: err
                });
            }
        });
        fs.writeFile(req.body.contentPath, req.body.esquemaContent, err => {
            if (err) {
                return res.status(500).json({
                    message: "Updating (writing new one) an esquema failed!",
                    error: err
                });
            }
        });
        esquema.title = req.body.title;
        esquema.contentPath = req.body.contentPath;
        Esquema.findByIdAndUpdate(req.params.id, esquema);
        const updatedEsquema = await Esquema.findById(req.params.id);
        return res.status(200).json({
            message: "Update successful!",
            esquema: updatedEsquema
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a datafile failed!"
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
        fs.unlink(esquema.contentPath, (err) => {
            if (err) {
                console.error(err);
            }
        });
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