const Role = require("../models/role");
const Collection = require("../models/collection");
const Workspace = require("../models/workspace");
const Datafile = require("../models/datafile");
const Configuration = require("../models/configuration");
const Esquema = require("../models/esquema");
const Test = require("../models/test");

var fs = require('file-system');
const xlsxFile = require('read-excel-file/node');

exports.createDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ "workspace": req.body.workspace, "user": current_user_id }).exec();
        const workspaces = await Workspace.find({ "_id": req.body.workspace }).exec();
        if (roles.length === 0) {
            return res.status(500).json({
                message: "The current user is not a member/admin/owner of the current workspace!"
            });
        } else if (workspaces.length === 0) {
            return res.status(500).json({
                message: "There is no workspace with that id."
            });
        } else if (workspaces.length === 1) {
            const collections = await Collection.find({ "_id": req.body.collection, "workspace": workspaces[0]._id }).exec();
            if (collections.length === 0 && req.body.collection != null) {
                return res.status(500).json({
                    message: "There is no collection with that id and the current workspace."
                });
            } else if (collections.length === 1 || req.body.collection == null) {

                const datafile = new Datafile({
                    title: req.body.title,
                    description: req.body.description,
                    contentPath: null,
                    limitErrors: null,
                    delimiter: null,
                    coleccion: req.body.collection,
                    workspace: req.body.workspace
                });
                await datafile.save(function(err, createdDatafile) {
                    return res.status(201).json({
                        message: "Datafile added successfully!",
                        datafile: {
                            ...createdDatafile,
                            id: createdDatafile._id
                        }
                    });
                });
            }
        }
    } catch (err) {
        res.status(500).json({
            message: "Creating a datafile failed!"
        });
    }
};

exports.updateDatafile = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ _id: req.params.id }).exec();
        if (datafiles.length === 1) {
            const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
            if (roles.length === 1) {
                var newContentPath = null;
                if ((req.body.operation === 'deleteFile' || req.body.operation === 'updateFile' || req.body.operation === 'updateContent') && datafiles[0].contentPath !== null) {
                    fs.unlink(datafiles[0].contentPath, (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });

                }
                if (req.body.operation === '') {
                    newContentPath = datafiles[0].contentPath;
                }
                if (req.body.operation === 'updateFile' || req.body.operation === 'updateContent') {
                    newContentPath = "backend/files/" + req.file.filename;
                }
                const datafile = new Datafile({
                    _id: req.params.id,
                    title: req.body.title,
                    description: req.body.description,
                    contentPath: newContentPath,
                    limitErrors: datafiles[0].limitErrors,
                    delimiter: datafiles[0].delimiter,
                    coleccion: datafiles[0].coleccion,
                    workspace: datafiles[0].workspace
                });
                Datafile.updateOne({ _id: req.params.id }, datafile).then(result => {
                    if (result.n > 0) {
                        return res.status(200).json({ message: "Update successful!" });
                    } else {
                        return res.status(401).json({ message: "Not authorized!" });
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else {
                return res.status(500).json({
                    message: "Updating a datafile failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Updating a datafile failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Updating a datafile failed!"
        });
    }
};

exports.deleteDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ _id: req.params.id }).exec();
        if (datafiles.length === 1) {
            const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
            if (roles.length === 1) {
                await Datafile.deleteOne({ _id: req.params.id });
                return res.status(200).json({ message: "Datafile deletion successful!" });
            } else {
                return res.status(401).json({ message: "Not authorized!" });
            }
        } else {
            return res.status(500).json({
                message: "Fetching a datafile failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a datafile failed!"
        });
    }

};

exports.getDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ _id: req.params.id }).exec();
        if (datafiles.length === 1) {
            const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
            if (roles.length === 1) {
                const configurations = await Configuration.find({ datafile: req.params.id }).exec();
                const esquemas = await Esquema.find({ datafile: req.params.id }).exec();
                const tests = await Test.find({ datafile: req.params.id }).exec();
                if (datafiles[0].contentPath != null) {
                    // const localURL = 'backend' + datafiles[0].contentPath.replace(req.protocol + "://" + req.get("host"), '');
                    var extension = datafiles[0].contentPath.split('.').pop().toLowerCase();
                    if (extension === 'csv') {
                        fs.readFile(datafiles[0].contentPath, 'utf8', (err, data) => {
                            if (err) {
                                return res.status(500).json({
                                    message: "Fetching a datafile failed!"
                                });
                            } else {
                                return res.status(200).json({
                                    datafile: datafiles[0],
                                    content: data,
                                    esquemas: esquemas,
                                    configurations: configurations,
                                    tests: tests
                                });
                            }
                        });
                    } else if (extension === 'xlsx') {
                        xlsxFile(datafiles[0].contentPath).then((rows) => {
                            return res.status(200).json({
                                datafile: datafiles[0],
                                content: rows,
                                esquemas: esquemas,
                                configurations: configurations,
                                tests: tests
                            });

                        }).catch(error => {
                            return res.status(500).json({
                                message: "Fetching a datafile failed!"
                            });
                        });
                    }
                } else {
                    return res.status(200).json({
                        datafile: datafiles[0],
                        content: null,
                        esquemas: esquemas,
                        configurations: configurations,
                        tests: tests
                    });
                }
            } else {
                return res.status(401).json({ message: "Not authorized!" });
            }
        } else {
            return res.status(500).json({
                message: "Fetching a datafile failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a datafile failed!"
        });
    }
};