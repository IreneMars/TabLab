const fs = require('fs');
const bufferedSpawn = require('buffered-spawn');

const { User, Datafile, Role, Test } = require('../models');

exports.updateFile = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        const entity = req.body.entity;
        let model;
        let actualFilePath = "";
        const url = req.protocol + "://" + req.get("host") + "/";
        if (req.file) {
            newFilePath = url + entity + "/" + req.file.filename;
        } else {
            newFilePath = req.body.filePath;
        }

        if (current_user_id !== req.body.userId) {
            return res.status(403).json({
                msg: `You're not authorized to perform this action.`
            });
        }
        var sameFiles = false;
        switch (entity) {
            case 'users':
                model = await User.findById(req.body.userId);
                if (!model) {
                    return res.status(400).json({
                        msg: `There is no user with id ${ id }`
                    });
                }
                if (model.photo) {
                    if (model.photo === newFilePath) {
                        sameFiles = true;
                    }
                    if (!model.photo.includes("assets")) { // If it is not in assets:
                        actualFilePath = model.photo.replace(url, 'backend/uploads/');
                    }

                    model.photo = newFilePath;
                    await User.updateOne({ _id: req.body.userId }, model)
                    break;
                }
            case 'datafiles':
                model = await Datafile.findById(req.body.datafileId);
                if (!model) {
                    return res.status(404).json({
                        msg: `There is no datafile with id ${ id }`
                    });
                }
                const roles = await Role.find({ workspace: model.workspace, user: current_user_id });
                if (roles.length !== 1) {
                    return res.status(403).json({
                        message: "The current user is not authorized to perform any actions on this workspace!"
                    });
                }
                let newContentPath = null;
                if (req.body.operation === 'updateFile' || req.body.operation === 'updateContent') {
                    newContentPath = "backend/uploads/datafiles/" + req.file.filename;
                }

                if (model.contentPath) {
                    actualFilePath = model.contentPath;
                }
                model.contentPath = newContentPath;
                await Datafile.updateOne({ _id: req.body.datafileId }, model)
                const tests = await Test.find({ 'datafile': req.body.datafileId });
                for (var test of tests) {
                    await Test.findByIdAndUpdate(test._id, { 'executable': true });
                }
                break;

            default:
                return res.status(500).json({ msg: 'There is no validation for this.' });
        }
        // Limpiar imágenes previas
        if (fs.existsSync(actualFilePath) && !sameFiles) {
            fs.unlinkSync(actualFilePath);
        }
        //await model.save();
        return res.status(200).json({
            message: "File updated!",
            entity: entity,
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
    try {
        const datafile = await Datafile.findById(req.body.datafile);

        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        if (req.body.operation === 'update' || req.body.operation === 'create') {
            if (req.body.operation === 'update') {
                fs.unlinkSync(req.body.contentPath);
            }

            fs.writeFile(req.body.contentPath, req.body.esquemaContent, (err) => {
                if (err) {
                    return res.status(500).json({
                        message: "Writing an esquema failed!"
                    });
                }
                return res.status(200).json({
                    message: "File updated!",
                    filePath: req.body.contentPath
                });
            });
        } else if (req.body.operation === 'infer') {
            const fileName = 'inferred_schema' + "-" + Date.now() + '.yaml';
            const newFilePath = 'backend/uploads/esquemas/' + fileName;
            bufferedSpawn('python', ["backend/scripts/infer_esquema.py", datafile.contentPath, fileName])
                .then((output) => {
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