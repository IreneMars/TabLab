const { Role, Test, Datafile, Esquema, Configuration } = require("../models");
const fs = require('fs');

exports.getTest = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const test = await Test.findById(req.params.id);
        const datafile = await Datafile.findById(test.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Fetching a test failed! (datafile not found)"
            });
        }
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({ 
                message: "Not authorized to fetch this test!" 
            });
        }
        var esquema = await Esquema.findById(test.esquema);
        if (!esquema) {
            esquema = null;
        }
        return res.status(200).json({
            message: "Sucessful fetch!",
            test: test,
            esquema: esquema,
            configurations: test.configurations
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a test failed!"
        });
    }
};

exports.createTest = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafile = await Datafile.findById(req.body.datafile);
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({ 
                message: "Not authorized to create a test of this datafile!" 
            });
        }
        const test = new Test({
            title: req.body.title,
            reportPath: null,
            status: 'pending',
            esquema: req.body.esquema,
            configurations: req.body.configurations,
            creationMoment: null,
            updateMoment: null,
            executionMoment: null,
            totalErrors: null,
            executable: true,
            datafile: req.body.datafile
        });
        await test.save(); 
        return res.status(201).json({
            message: "Test created successfully!",
            test: test
        });        
    } catch (err) {
        return res.status(500).json({
            message: "Creating a test failed!"
        });
    }
};

exports.updateTest = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const test = await Test.findById(req.params.id);
        const datafile = await Datafile.findById(test.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Updating a test failed! (datafile not found)"
            });
        }
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(401).json({ message: "Not authorized to update this test!" });
        }
        var executionMoment = null;
        var errors = 0;
        if (req.body.action === 'execute') {
            console.log("===========================");
            console.log("UPDATING TEST");
            executionMoment = Date.now();
            split1 = datafile.contentPath.split('.');
            split2 = split1[0].split('/');
            const errorReportPath = 'backend/output/' + split2[2] + '_errors.csv';
            fs.readFile(errorReportPath, 'utf8', async(err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    lines = data.split("\n");
                    errors = lines.length - 1;
                    const test = new Test({
                        _id: req.params.id,
                        title: req.body.title,
                        status: req.body.status,
                        reportPath: test.reportPath,
                        esquema: req.body.esquema,
                        configurations: req.body.configurations,
                        creationMoment: test.creationMoment,
                        updateMoment: Date.now(),
                        executionMoment: executionMoment, // se verifica
                        totalErrors: errors,
                        executable: true, // Aún por verificar
                        datafile: test.datafile
                    });
                    console.log(test);
                    await Test.findByIdAndUpdate(req.params.id, test);
                    const updatedTest = await Test.findById(req.params.id);
                    return res.status(200).json({ 
                        message: "Update successful!",
                        test: updatedTest
                    });
                }
            })
        } else {
            test.title = req.body.title;
            test.esquema = req.body.esquema;
            test.configurations = req.body.configurations;
            test.updateMoment = Date.now();
            test.executable = true;
        
            Test.findByIdAndUpdate(req.params.id, test);
            const updatedTest = await Test.findById(req.params.id);
            return res.status(200).json({ 
                message: "Test update successful!",
                test: updatedTest
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Updating a test failed!"
        });
    }
};

exports.deleteTest = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const test = await Test.findById(req.params.id);
        const datafile = await Datafile.findById(test.datafile);
        if (!datafile) {
            return res.status(401).json({
                message: "Deleting a test failed!"
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(401).json({ message: "You are not authorized to delete a test from this datafile!" });
        }
        await Test.deleteOne({ _id: req.params.id });
        return res.status(200).json({ 
            message: "Test deleted successfully!" 
        });
    } catch (err) {
        return res.status(500).json({
            message: "Deleting an esquema failed!"
        });
    }

};