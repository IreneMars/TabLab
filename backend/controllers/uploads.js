const fs = require('fs');
const bufferedSpawn = require('buffered-spawn');

const { User, Datafile, Role, Test } = require('../models');

exports.updatePhoto = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        if (current_user_id !== req.body.userId) {
            return res.status(403).json({
                msg: `You're not authorized to perform this action.`
            });
        }
        // Fetch user info
        var user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(400).json({
                msg: `There is no user with id ${ id }`
            });
        }

        // New File Path
        var newFilePath = "";
        const url = req.protocol + "://" + req.get("host") + "/";

        if (req.file != null) {
            newFilePath = url + "users/" + req.file.filename;
        } else {
            newFilePath = req.body.filePath;
        }

        //ActualFilePath
        var actualFilePath = "";
        var sameFiles = false;
        if (user.photo) {
            if (!user.photo.includes("assets")) { // If it is not in assets:
                actualFilePath = user.photo.replace(url, 'backend/uploads/');
            }
            if (user.photo === newFilePath) {
                sameFiles = true;
            } else {
                user.photo = newFilePath;
            }
            const userUpdated = await User.updateOne({ _id: req.body.userId }, user)
        }


        // Limpiar imágenes previas
        if (fs.existsSync(actualFilePath) && !sameFiles) {
            fs.unlinkSync(actualFilePath);
        }

        return res.status(200).json({
            message: "File updated!",
            entity: "users",
            filePath: newFilePath
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating a file failed!"
        });
    }
}

exports.updateFile = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        if (current_user_id !== req.body.userId) {
            return res.status(403).json({
                msg: `You're not authorized to perform this action.`
            });
        }
        // New file path
        var newFilePath = "";
        const url = req.protocol + "://" + req.get("host") + "/";
        if (req.body.operation === 'updateFile' || req.body.operation === 'updateContent') {
            if (req.file) {
                newFilePath = url + "datafiles/" + req.file.filename;
            } else {
                newFilePath = req.body.filePath;
            }
        }
        // Fetching datafile data
        var datafile = await Datafile.findById(req.params.id);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        //ActualFilePath
        var actualFilePath = "";
        if (datafile.contentPath) {
            actualFilePath = datafile.contentPath.replace(url, 'backend/uploads/');
            //actualFilePath = datafile.contentPath;
            if (datafile.contentPath === newFilePath) {
                sameFiles = true;
            } else {
                datafile.contentPath = newFilePath;
            }
        }
        var sameFiles = false;

        // Limpiar imágenes previas
        if (fs.existsSync(actualFilePath) && !sameFiles) {
            fs.unlinkSync(actualFilePath);
        }

        await Datafile.updateOne({ _id: req.params.id }, datafile)
        var tests = await Test.find({ 'datafile': req.params.id });
        for (var test of tests) {
            await Test.findByIdAndUpdate(test._id, { 'executable': true });
        }

        return res.status(200).json({
            message: "File updated!",
            entity: "datafiles",
            filePath: newFilePath
        });

    } catch (err) {
        return res.status(500).json({
            message: "Updating a file failed!"
        });

    }
}

exports.updateEsquemaContent = async(req, res) => {
    current_user_id = req.userData.userId;
    console.log("updateEsquemaContent")

    try {
        const url = req.protocol + "://" + req.get("host") + "/";

        console.log(req.body)
        console.log(req.body.datafile)
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }
        console.log(req.body.operation)
        if (req.body.operation === 'update' || req.body.operation === 'create') {
            var actualFilePath = "";
            var newFilePath = "";
            if (req.body.operation === 'update') {
                actualFilePath = req.body.contentPath.replace(url, 'backend/uploads/');
                fs.unlinkSync(actualFilePath);
                newFilePath = req.body.contentPath;
            } else {
                newFilePath = url + "esquemas/" + req.body.fileName;
            }
            console.log("Actual: " + actualFilePath)
            console.log("New: " + newFilePath)
            auxFilePath = 'backend/uploads/esquemas/' + req.body.fileName;
            console.log(auxFilePath)
            console.log(req.body.esquemaContent)
            fs.writeFile(auxFilePath, req.body.esquemaContent, (err) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: "Writing an esquema failed!"
                    });
                }
                return res.status(200).json({
                    message: "File updated!",
                    filePath: newFilePath
                });
            });
        } else if (req.body.operation === 'infer') {
            const fileName = 'inferred_schema' + "-" + Date.now() + '.yaml';
            bufferedSpawn('python', ["backend/scripts/infer_esquema.py", datafile.contentPath, fileName])
                .then((output) => {
                    const newFilePath = url + "esquemas/" + fileName;
                    return res.status(200).json({
                        message: "Esquema inferred successfully",
                        filePath: newFilePath
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
            message: "Updating an esquema file failed!"
        });
    }
}