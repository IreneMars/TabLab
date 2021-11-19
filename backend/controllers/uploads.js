const path = require('path');
const fs = require('fs');

const { User, Datafile, Role } = require('../models');

exports.updateFile = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        const entity = req.body.entity;
        let model;
        let actualFilePath = "";
        if (req.file) {
            const url = req.protocol + "://" + req.get("host") + "/";
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
                    console.log(model.photo)
                    console.log(newFilePath)
                    if (model.photo === newFilePath) {
                        sameFiles = true;
                    }
                    if (!model.photo.includes("assets")) {
                        actualFilePath = model.photo.replace('http://localhost:3000', 'backend/uploads');
                    } else {
                        actualFilePath = model.photo;
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
                roles = await Role.find({ workspace: model.workspace, user: current_user_id });
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