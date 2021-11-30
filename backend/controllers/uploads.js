const fs = require('fs');
const bufferedSpawn = require('buffered-spawn');

const { User, Datafile, Role, Test, Esquema } = require('../models');
const { uploadObject, deleteObject } = require('../helpers');

exports.updatePhoto = async(req, res) => {
    current_user_id = req.userData.userId;
    try {
        if (current_user_id !== req.params.id) {
            return res.status(403).json({
                msg: `You're not authorized to perform this action.`
            });
        }

        if (req.file == null) {
            return res.status(400).json({
                msg: `You must send a file in body.`
            });
        }

        // Fetch user info
        var user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).json({
                msg: `There is no user with id ${ id }`
            });
        }

        // New File Path
        const fileName = `users/${req.file.filename}`;
        const fileData = fs.readFileSync(req.file.path);
        const url = await uploadObject(fileData, fileName);
        
        //ActualFilePath
        if (user.photo) {
            await deleteObject(user.photo.replace("https://"+process.env.S3_BUCKET+".s3.amazonaws.com/", ""))
        }
        
        user.photo = url;
        await User.updateOne({ _id: req.params.id }, user)

        return res.status(200).json({
            message: "File updated!",
            entity: "users",
            filePath: url
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating a file failed!"
        });
    }
}

exports.updateDataFile = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        // Fetching datafile data
        var datafile = await Datafile.findById(req.params.id);
        
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        //ActualFilePath
        if (datafile.contentPath) {
            await deleteObject(datafile.contentPath.replace("https://"+process.env.S3_BUCKET+".s3.amazonaws.com/", ""))
        }

        // New File Path
        const fileName = `datafiles/${req.file.filename}`;
        const fileData = fs.readFileSync(req.file.path, 'utf8');
        const url = await uploadObject(fileData, fileName);
        
        datafile.contentPath = url;
        
        var split = fileData.split("\n");
        var rows = split.length - 1;
        var columns = split[0].split(datafile.delimiter).length + 1;
        datafile.errLimit = rows * columns;
        await Datafile.findByIdAndUpdate(req.params.id, datafile);

        var tests = await Test.find({ 'datafile': req.params.id });
        for (var test of tests) {
            await Test.findByIdAndUpdate(test._id, { 'executable': true });
        }

        return res.status(200).json({
            message: "File updated!",
            entity: "datafiles",
            filePath: url
        });

    } catch (err) {
        return res.status(500).json({
            message: "Updating a file failed!"
        });
    }
}

exports.deleteDataFile = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        // Fetching datafile data
        var datafile = await Datafile.findById(req.params.id);
        
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        //ActualFilePath
        if (datafile.contentPath) {
            await deleteObject(datafile.contentPath.replace("https://"+process.env.S3_BUCKET+".s3.amazonaws.com/", ""))
        }

        datafile.contentPath = "";

        await Datafile.updateOne({ _id: req.params.id }, datafile);
        
        var tests = await Test.find({ 'datafile': req.params.id });
        for (var test of tests) {
            await Test.findByIdAndUpdate(test._id, { 'executable': true });
        }

        return res.status(200).json({
            message: "File Deleted!",
            datafile: datafile
        });

    } catch (err) {
        return res.status(500).json({
            message: "Deleting a file failed!"
        });
    }
}

exports.addEsquemaContent = async(req, res) => {
    current_user_id = req.userData.userId;

    try {
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        var split = req.body.fileName.split(".");
        const extension = split[1].toLowerCase();
        var name = split[0].toLowerCase().split(" ").join("_") + "-" + Date.now() + "." + extension;
        
        const fileUrl = await uploadObject(req.body.esquemaContent, `esquemas/${name}`);

        const esquema = new Esquema({
            title: req.body.title,
            contentPath: fileUrl,
            creationMoment: null,
            datafile: req.body.datafile
        });
        const createdEsquema = await esquema.save();

        return res.status(201).json({
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
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }
        
        const esquema = await Esquema.findById(req.params.esquemaId);

        // New File Path
        var name = esquema.contentPath.replace("https://"+process.env.S3_BUCKET+".s3.amazonaws.com/", "");
        await uploadObject(req.body.esquemaContent, name);

        await Esquema.findByIdAndUpdate(req.params.esquemaId, {
            title: req.body.title
        });
        const updatedEsquema = await Esquema.findById(req.params.esquemaId);
        
        return res.status(200).json({
            message: "Esquema updated!",
            esquema: updatedEsquema,
            newContent: req.body.esquemaContent
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
        const datafile = await Datafile.findById(req.params.datafileId);
        
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "The current user is not authorized to perform any actions on this workspace!"
            });
        }

        const fileName = 'inferred_schema' + "-" + Date.now() + '.yaml'

        bufferedSpawn('python', ["backend/scripts/infer_esquema.py", datafile.contentPath, fileName])
            .then(async(output) => {
                // New File Path
                var fileS3Path = `esquemas/${fileName}`;
                const fileData = fs.readFileSync("backend/uploads/esquemas/" + fileName);

                const url = await uploadObject(fileData, fileS3Path);

                const esquema = new Esquema({
                    title: "Inferred Esquema - " + datafile.title,
                    contentPath: url,
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