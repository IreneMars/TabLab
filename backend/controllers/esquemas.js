const Role = require("../models/role");
const Esquema = require("../models/esquema");
const Datafile = require("../models/datafile");
const fs = require('fs');
var spawn = require("child_process").spawn;
const bufferedSpawn = require('buffered-spawn');

exports.getEsquemas = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ '_id': req.query.datafileId });
        if (datafiles.length === 1) {
            const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });
            if (roles.length === 1) {
                const foundSchemas = await Esquema.find({ 'datafile': req.query.datafileId });
                if (foundSchemas.length > 0) {
                    return res.status(200).json({
                        message: "Esquemas fetched successfully!",
                        esquemas: foundSchemas,
                    });
                }
            }
        } else {
            return res.status(500).json({
                message: "Fetching schemas failed!"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Fetching schemas failed!"
        });
    }
};

exports.createEsquema = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ '_id': req.params.datafileId });
        if (datafiles.length === 1) {
            const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });
            var localPath = '';
            var title = '';
            if (roles.length === 1) {
                if (req.body.fileName) { // Manual creation
                    title = req.body.title;
                    const split = req.body.fileName.split('.');
                    const extension = '.' + split[1].toLowerCase();
                    const fileName = split[0].toLowerCase().split(' ').join('_') + "-" + Date.now() + extension;
                    localPath = "backend/esquemas/" + fileName;
                    await fs.writeFile(localPath, req.body.esquemaContent, err => {
                        if (err) {
                            console.error(err);
                        }
                    });
                    const esquema = new Esquema({
                        title: title,
                        contentPath: localPath,
                        creationMoment: null,
                        datafile: req.params.datafileId
                    });
                    await esquema.save(function(err, createdEsquema) {
                        return res.status(201).json({
                            message: "Esquema added successfully!",
                            esquema: {
                                ...createdEsquema,
                                id: createdEsquema._id
                            }
                        });
                    });
                } else if (!req.body.fileName && datafiles[0].contentPath) { // Infer creation
                    console.log("Inferring");
                    const fileName = 'inferred_schema' + "-" + Date.now() + '.yaml';
                    localPath = 'backend/esquemas/' + fileName;
                    title = "Inferred esquema - " + datafiles[0].title;
                    bufferedSpawn('python', ["backend/scripts/infer_esquema.py", datafiles[0].contentPath, fileName])
                        .then((output) => {
                            console.log('Pipe data from python script ...');
                            console.log(output.stdout);
                            console.log(output.stderr);
                            // send data to browser
                            const esquema = new Esquema({
                                title: title,
                                contentPath: localPath,
                                creationMoment: null,
                                datafile: req.params.datafileId
                            });
                            console.log(esquema);
                            esquema.save()
                                .then(createdEsquema => {
                                    res.status(201).json({
                                        message: "Esquema inferred successfully",
                                        post: {
                                            ...createdEsquema,
                                            id: createdEsquema._id
                                        }
                                    });
                                })
                                .catch(error => {
                                    res.status(500).json({
                                        message: "Inferring an esquema failed!"
                                    });
                                });
                        }, (err) => {
                            console.error(`Command failed with error code of #${err.status}`);
                        });
                } else if (!req.body.fileName && !datafiles[0].contentPath) {
                    return res.status(500).json({
                        message: "There is no content to infer an schema!"
                    });
                }

            }
        }
    } catch (err) {
        return res.status(500).json({
            message: "Creating a esquema failed!"
        });
    }
};

exports.deleteEsquema = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const esquemas = await Esquema.find({ _id: req.params.id }).exec();
        if (esquemas.length === 1) {
            const datafiles = await Datafile.find({ '_id': esquemas[0].datafile });

            if (datafiles.length === 1) {
                const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });

                if (roles.length === 1) {
                    fs.unlink(esquemas[0].contentPath, (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
                    await Esquema.deleteOne({ _id: req.params.id });
                    return res.status(200).json({ message: "Esquema deletion successful!" });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(401).json({
                    message: "Deleting an esquema failed!"
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

exports.getEsquema = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const esquemas = await Esquema.find({ _id: req.params.id }).exec();
        if (esquemas.length === 1) {
            const datafiles = await Datafile.find({ _id: esquemas[0].datafile }).exec();
            if (datafiles.length === 1) {
                const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();

                if (roles.length === 1) {
                    fs.readFile(esquemas[0].contentPath, 'utf8', (err, data) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({
                                message: "Fetching an esquema failed!"
                            });
                        } else {
                            return res.status(200).json({
                                esquema: esquemas[0],
                                content: data
                            });
                        }
                    });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(500).json({
                    message: "Fetching an esquema failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Fetching an esquema failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching an esquema failed!"
        });
    }
};

exports.updateEsquema = async(req, res, next) => {
    current_user_id = req.userData.userId;

    try {
        const esquemas = await Esquema.find({ _id: req.params.id }).exec();
        if (esquemas.length === 1) {
            const datafiles = await Datafile.find({ _id: esquemas[0].datafile }).exec();
            if (datafiles.length === 1) {
                const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
                if (roles.length === 1) {
                    fs.unlink(req.body.contentPath, (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
                    await fs.writeFile(req.body.contentPath, req.body.esquemaContent, err => {
                        if (err) {
                            console.error(err);
                        }
                    });
                    const esquema = new Esquema({
                        _id: req.params.id,
                        title: req.body.title,
                        contentPath: req.body.contentPath,
                        creationMoment: esquemas[0].creationMoment,
                        datafile: esquemas[0].datafile
                    });
                    Esquema.updateOne({ _id: req.params.id }, esquema).then(result => {
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
                    message: "Updating an esquema failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Updating an esquema failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a datafile failed!"
        });
    }
};