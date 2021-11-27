const { Activity, Role, Collection, Workspace, Datafile, Configuration, Esquema, Test, User } = require("../models");
var fs = require('file-system');
const xlsxFile = require('read-excel-file/node');

exports.getDatafiles = async(req, res) => {
    try {
        const datafiles = await Datafile.find();
        return res.status(200).json({
            message: "Datafiles fetched successfully!",
            datafiles: datafiles,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching datafiles failed!"
        });
    }
};

exports.getDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const url = req.protocol + "://" + req.get("host") + "/";

        const datafile = await Datafile.findById(req.params.id);
        if (!datafile) {
            return res.status(500).json({
                message: "Datafile not found."
            });
        }

        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        const user = await User.findById(current_user_id);

        if (roles.length !== 1 && user.role !== 'ADMIN') {
            return res.status(403).json({
                message: "You are not authorized to fetch this datafile."
            });
        }
        const configurations = await Configuration.find({ datafile: req.params.id });
        const esquemas = await Esquema.find({ datafile: req.params.id });
        const tests = await Test.find({ datafile: req.params.id });
        if (datafile.contentPath != null) {

            var extension = datafile.contentPath.split('.').pop().toLowerCase();
            if (extension === 'csv') {
                actualFilePath = datafile.contentPath.replace(url, 'backend/uploads/');

                fs.readFile(actualFilePath, 'utf8', (err, data) => {
                    if (err) {
                        return res.status(500).json({
                            message: "Fetching the content of the csv file of this datafile failed!"
                        });
                    } else {
                        return res.status(200).json({
                            message: "Sucessful fetch!",
                            datafile: datafile,
                            content: data,
                            esquemas: esquemas,
                            configurations: configurations,
                            tests: tests
                        });
                    }
                });
            } else if (extension === 'xlsx') {
                xlsxFile(datafile.contentPath).then((rows) => {
                    return res.status(200).json({
                        message: "Sucessful fetch!",
                        datafile: datafile,
                        content: rows,
                        esquemas: esquemas,
                        configurations: configurations,
                        tests: tests
                    });
                }).catch(error => {
                    return res.status(500).json({
                        message: "Fetching the content of the xlsx file of this datafile failed!"
                    });
                });
            }
        } else {
            return res.status(200).json({
                message: "Sucessful fetch!",
                datafile: datafile,
                content: null,
                esquemas: esquemas,
                configurations: configurations,
                tests: tests
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a datafile failed!"
        });
    }
};

exports.createDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ "workspace": req.body.workspace, "user": current_user_id });

        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to create a datafile inside this workspace."
            });
        }
        const collections = await Collection.find({ "_id": req.body.collection, "workspace": req.body.workspace });

        if (collections.length === 0 && req.body.collection != null) {
            return res.status(500).json({
                message: "There is no collection with that id and the current workspace."
            });
        }
        const datafile = new Datafile({
            title: req.body.title,
            description: req.body.description,
            contentPath: null,
            delimiter: req.body.delimiter,
            errLimit: null,
            coleccion: req.body.coleccion,
            workspace: req.body.workspace
        });

        const createdDatafile = await datafile.save();

        const workspace = await Workspace.findById(createdDatafile.workspace);

        const user = await User.findById(current_user_id);
        var messageAux = "{{author}} añadió el fichero {{datafile}} al espacio de trabajo {{workspace}}";
        var coleccionAux = null;
        var coleccionTitleAux = null;
        if (req.body.coleccion != null) {
            messageAux = "{{author}} añadió el fichero {{datafile}} al espacio de trabajo {{workspace}} (en la colección {{coleccion}})";
            const coleccion = await Collection.findById(req.body.coleccion);
            coleccionAux = coleccion._id;
            coleccionTitleAux = coleccion.title;
        }
        const activity = new Activity({
            message: messageAux,
            workspace: workspace._id,
            workspaceTitle: workspace.title,
            author: current_user_id,
            authorName: user.name,
            coleccion: coleccionAux,
            coleccionTitle: coleccionTitleAux,
            datafile: datafile._id,
            datafileTitle: datafile.title,
            creationMoment: null

        });
        await activity.save();

        return res.status(201).json({
            message: "Datafile added successfully!",
            datafile: createdDatafile
        });
    } catch (err) {
        return res.status(500).json({
            message: "Creating a datafile failed!"
        });
    }
};

exports.updateDatafile = async(req, res) => {
    current_user_id = req.userData.userId;
    try {
        const datafile = await Datafile.findById(req.params.id);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to update a datafile from this workspace."
            });
        }
        await Datafile.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            delimiter: req.body.delimiter,
            coleccion: req.body.coleccion
        });
        const updatedDatafile = await Datafile.findById(req.params.id);

        const workspace = await Workspace.findById(updatedDatafile.workspace);
        const user = await User.findById(current_user_id);
        var messageAux = "{{author}} modificó el fichero del espacio de trabajo {{workspace}}";
        var coleccionAux = null;
        var coleccionTitleAux = null;
        if (updatedDatafile.coleccion) {
            messageAux = "{{author}} modificó el fichero del espacio de trabajo {{workspace}} (de la colección {{coleccion}})";
            const coleccion = await Collection.findById(updatedDatafile.coleccion);
            coleccionAux = coleccion._id;
            coleccionTitleAux = coleccion.title;
        }
        const activity = new Activity({
            message: messageAux,
            workspace: workspace._id,
            workspaceTitle: workspace.title,
            author: current_user_id,
            authorName: user.name,
            coleccion: coleccionAux,
            coleccionTitle: coleccionTitleAux,
            datafile: datafile._id,
            datafileTitle: datafile.title,
            creationMoment: null
        });
        await activity.save();

        return res.status(200).json({
            message: "Update successful!",
            datafile: updatedDatafile
        });

    } catch (err) {
        return res.status(500).json({
            message: "Updating a datafile failed!"
        });
    }
};

exports.deleteDatafile = async(req, res) => {
    const current_user_id = req.userData.userId;
    try {
        const datafile = await Datafile.findById(req.params.id);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        const user = await User.findById(current_user_id);

        if (roles.length !== 1 && user.role !== 'ADMIN') {
            return res.status(403).json({
                message: "You are not authorized to delete a datafile from this workspace."
            })
        }
        const datafileTitle = datafile.title;
        await Configuration.deleteMany({ datafile: req.params.id });
        await Esquema.deleteMany({ datafile: req.params.id });
        await Test.deleteMany({ datafile: req.params.id });
        await Datafile.deleteOne({ _id: req.params.id });

        const workspace = await Workspace.findById(datafile.workspace);
        var messageAux = "{{author}} eliminó el fichero del espacio de trabajo {{workspace}}";
        var coleccionAux = null;
        var coleccionTitleAux = null
        if (datafile.coleccion) {
            messageAux = "{{author}} eliminó el fichero del espacio de trabajo {{workspace}} (de la colección {{coleccion}})";
            const coleccion = await Collection.findById(datafile.coleccion);
            coleccionAux = coleccion._id;
            coleccionTitleAux = coleccion.title;
        }
        const activity = new Activity({
            message: messageAux,
            workspace: workspace._id,
            workspaceTitle: workspace.title,
            author: current_user_id,
            authorName: user.name,
            coleccion: coleccionAux,
            coleccionTitle: coleccionTitleAux,
            datafile: null,
            datafileTitle: datafileTitle,
            creationMoment: null
        });
        await activity.save();

        return res.status(200).json({
            message: "Datafile deletion successful!"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Deleting a datafile failed!"
        });
    }

};