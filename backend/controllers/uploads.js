const fs = require('fs');
const bufferedSpawn = require('buffered-spawn');

const { User, Datafile, Role, Test, Esquema } = require('../models');

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
        var data = null;
        var rows = 0;
        var columns = 0;
        if (req.body.operation === 'updateFile' || req.body.operation === 'updateContent') {
            data = fs.readFileSync(req.file.path, 'utf8')
            data = data.split("\n");

            if (req.file) {
                newFilePath = url + "datafiles/" + req.file.filename;
            } else {
                newFilePath = req.body.filePath;
            }
        }
        // Fetching datafile data
        var datafile = await Datafile.findById(req.params.id);
        rows = data.length - 1;
        columns = data[0].split(datafile.delimiter).length + 1;
        datafile.errLimit = rows * columns;
        await Datafile.findByIdAndUpdate(req.params.id, datafile);
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

exports.addEsquemaContent = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        const url = req.protocol + "://" + req.get("host") + "/";
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }
        var split = req.body.fileName.split(".");
        const name = split[0].toLowerCase().split(" ").join("_");
        const extension = split[1].toLowerCase();

        const auxName = name + "-" + Date.now() + "." + extension;
        const newFilePath = url + "esquemas/" + auxName;
        auxFilePath = 'backend/uploads/esquemas/' + auxName;
        const esquema = new Esquema({
            title: req.body.title,
            contentPath: newFilePath,
            creationMoment: null,
            datafile: req.body.datafile
        });
        const createdEsquema = await esquema.save();
        fs.writeFileSync(auxFilePath, req.body.esquemaContent);

        return res.status(200).json({
            message: "Esquema added!",
            esquema: createdEsquema,
            newContent: req.body.esquemaContent
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating an esquema file failed!"
        });
    }
}

exports.updateEsquemaContent = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        const url = req.protocol + "://" + req.get("host") + "/";
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        const esquema = await Esquema.findById(req.params.esquemaId);
        const actualFilePath = esquema.contentPath.replace(url, 'backend/uploads/');

        await Esquema.findByIdAndUpdate(req.params.esquemaId, { title: req.body.title });
        const updatedEsquema = await Esquema.findById(req.params.esquemaId);
        fs.writeFile(actualFilePath, req.body.esquemaContent, (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Updating an esquema failed!"
                });
            }
            return res.status(200).json({
                message: "Esquema updated!",
                esquema: updatedEsquema,
                newContent: req.body.esquemaContent
            });
        });

    } catch (err) {
        return res.status(500).json({
            message: "Updating an esquema file failed!"
        });
    }
}

exports.inferEsquemaContent = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        const url = req.protocol + "://" + req.get("host") + "/";
        const datafile = await Datafile.findById(req.params.datafileId);

        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }
        const fileName = 'inferred_schema' + "-" + Date.now() + '.yaml'
        const newFilePath = url + "esquemas/" + fileName;

        bufferedSpawn('python', ["backend/scripts/infer_esquema.py", datafile.contentPath, fileName])
            .then(async(output) => {
                const esquema = new Esquema({
                    title: "Inferred Esquema - " + datafile.title,
                    contentPath: newFilePath,
                    creationMoment: null,
                    datafile: req.params.datafileId
                });
                const createdEsquema = await esquema.save();
                return res.status(200).json({
                    message: "Esquema inferred successfully",
                    esquema: createdEsquema,
                });
            }, (err) => {
                return res.status(500).json({
                    message: "Inferring an esquema failed!",
                });
            });

    } catch (err) {
        return res.status(500).json({
            message: "Updating an esquema file failed!"
        });
    }
}