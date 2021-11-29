const { Role, Test, Datafile, Esquema, User } = require("../models");
const axios = require('axios');

exports.getTests = async(req, res) => {
    try {
        var tests = await Test.find();
        if (tests.length > 0) {
            for (var test of tests) {
                const datafile = await Datafile.findById(test.datafile);
                test._doc['workspace'] = datafile.workspace;
            }
        }
        return res.status(200).json({
            message: "Tests fetched successfully!",
            tests: tests,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching tests failed!"
        });
    }
};

exports.getTestsByWorkspace = async(req, res) => {
    const workspaceId = req.params.workspaceId;
    const current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ workspace: workspaceId, user: current_user_id });

        if (roles.length !== 1) {
            return res.status(403).json({
                message: "Not authorized to fetch this tests!"
            });
        }
        const datafiles = await Datafile.find({ 'workspace': workspaceId });
        var datafile_ids = datafiles.map(function(elem) {
            return elem._id.toString();
        });
        datafile_ids = [...new Set(datafile_ids)];
        const tests = await Test.find({ 'datafile': { $in: datafile_ids } });
        if (tests.length > 0) {
            for (var test of tests) {
                const datafile = await Datafile.findById(test.datafile);
                test._doc['datafileTitle'] = datafile.title;
                test._doc['workspace'] = datafile.workspace;
            }
        }
        return res.status(200).json({
            message: "Tests fetched successfully!",
            tests: tests,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching tests failed!"
        });
    }
};

exports.getTestsByDatafile = async(req, res) => {
    const workspaceId = req.params.workspaceId;
    const datafileId = req.params.datafileId;
    const current_user_id = req.userData.userId;

    try {
        const roles = await Role.find({ 'workspace': workspaceId, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "Not authorized to fetch this tests!"
            });
        }
        const tests = await Test.find({ 'datafile': datafileId });
        return res.status(200).json({
            message: "Tests fetched successfully!",
            tests: tests,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching tests failed!"
        });
    }
};

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
        const user = await User.findById(current_user_id);
        if (roles.length !== 1 && user.role !== 'ADMIN') {
            return res.status(403).json({
                message: "Not authorized to fetch this test!"
            });
        }
        var esquema = await Esquema.findById(test.esquema);
        if (!esquema) {
            esquema = null;
        }
        if (test.reportPath) {
            try {
                const response = await axios.get(test.reportPath);
                return res.status(200).json({
                    message: "Sucessful fetch!",
                    test: test,
                    esquema: esquema,
                    configurationIDs: test.configurations,
                    reportContent: response.data
                });
            } catch (error) {
                return res.status(500).json({
                    message: "Fetching the content of the report file of this test failed!"
                });
            }
        } else {
            return res.status(200).json({
                message: "Sucessful fetch!",
                test: test,
                esquema: esquema,
                configurationIDs: test.configurations,
                reportContent: ""
            });
        }
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
        const test = await Test.findById(req.params.testId);
        const datafile = await Datafile.findById(test.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Updating a test failed! (datafile not found)"
            });
        }
        if (req.body.id !== req.params.testId) {
            return res.status(500).json({
                message: "Updating a test failed!"
            });
        }
        const roles = await Role.find({ workspace: datafile.workspace, user: current_user_id });
        if (roles.length !== 1) {
            return res.status(401).json({
                message: "Not authorized to update this test!"
            });
        }
        const testUpdate = req.body;
        testUpdate.updateMoment = Date.now();

        await Test.findByIdAndUpdate(req.params.testId, testUpdate);
        const updatedTest = await Test.findById(req.params.testId);
        return res.status(200).json({
            message: "Test update successful!",
            test: updatedTest
        });

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
        const user = await User.findById(current_user_id);
        if (roles.length !== 1 && user.role !== 'ADMIN') {
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