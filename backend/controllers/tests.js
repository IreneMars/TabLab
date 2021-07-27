const Role = require("../models/role");
const Test = require("../models/test");
const Datafile = require("../models/datafile");
const Esquema = require("../models/esquema");
const Configuration = require("../models/configuration");
const fs = require('fs');

exports.createTest = async(req, res, next) => {

    const current_user_id = req.userData.userId;
    try {
        const datafiles = await Datafile.find({ '_id': req.params.datafileId });
        if (datafiles.length === 1) {
            const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });
            if (roles.length === 1) {

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
                    datafile: req.params.datafileId
                });
                console.log(test);
                await test.save(function(err, createdTest) {
                    console.log(err);
                    return res.status(201).json({
                        message: "Test added successfully!",
                        test: {
                            ...createdTest,
                            id: createdTest._id
                        }
                    });
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            message: "Creating a test failed!"
        });
    }
};

exports.deleteTest = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const tests = await Test.find({ _id: req.params.id }).exec();
        if (tests.length === 1) {
            const datafiles = await Datafile.find({ '_id': tests[0].datafile });
            if (datafiles.length === 1) {
                const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });
                if (roles.length === 1) {
                    await Test.deleteOne({ _id: req.params.id });
                    return res.status(200).json({ message: "Test deletion successful!" });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(401).json({
                    message: "Deleting a test failed!"
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

exports.getTest = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const tests = await Test.find({ _id: req.params.id }).exec();
        if (tests.length === 1) {
            const datafiles = await Datafile.find({ _id: tests[0].datafile }).exec();
            if (datafiles.length === 1) {
                const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
                if (roles.length === 1) {
                    var esquema = null;
                    const esquemas = await Esquema.find({ '_id': tests[0].esquema });
                    if (esquemas.length === 1) {
                        esquema = esquemas[0];
                    }
                    return res.status(200).json({
                        test: tests[0],
                        esquema: esquema,
                        configurations: tests[0].configurations
                    });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            } else {
                return res.status(500).json({
                    message: "Fetching a test failed!"
                });
            }
        } else {
            return res.status(500).json({
                message: "Fetching a test failed!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a test failed!"
        });
    }
};

exports.updateTest = async(req, res, next) => {
    console.log(req.body);
    current_user_id = req.userData.userId;
    try {
        const tests = await Test.find({ _id: req.params.id }).exec();
        if (tests.length !== 1) {
            return res.status(500).json({
                message: "Updating a test failed!"
            });
        }
        const datafiles = await Datafile.find({ _id: tests[0].datafile }).exec();
        if (datafiles.length !== 1) {
            return res.status(500).json({
                message: "Updating a test failed!"
            });
        }
        const roles = await Role.find({ workspace: datafiles[0].workspace, user: current_user_id }).exec();
        if (roles.length !== 1) {
            return res.status(401).json({ message: "Not authorized!" });
        }
        var executionMoment = null;
        var errors = 0;
        if (req.body.action === 'execute') {
            console.log("===========================");
            console.log("UPDATING TEST");
            executionMoment = Date.now();
            split1 = datafiles[0].contentPath.split('.');
            split2 = split1[0].split('/');
            const errorReportPath = 'backend/output/' + split2[2] + '_errors.csv';
            fs.readFile(errorReportPath, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    lines = data.split("\n");
                    console.log(lines.length - 1);
                    errors = lines.length - 1;
                    const test = new Test({
                        _id: req.params.id,
                        title: req.body.title,
                        status: req.body.status,
                        reportPath: tests[0].reportPath,
                        esquema: req.body.esquema,
                        configurations: req.body.configurations,
                        creationMoment: tests[0].creationMoment,
                        updateMoment: Date.now(),
                        executionMoment: executionMoment, // se verifica
                        totalErrors: errors,
                        executable: true, // Aún por verificar
                        datafile: tests[0].datafile
                    });
                    console.log(test);
                    Test.updateOne({ _id: req.params.id }, test).then(result => {
                        if (result.n > 0) {
                            res.status(200).json({ message: "Update successful!" });
                        } else {
                            res.status(401).json({ message: "Not authorized!" });
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                }
            })
        } else {
            const test = new Test({
                _id: req.params.id,
                title: req.body.title,
                status: tests[0].status,
                reportPath: tests[0].reportPath,
                esquema: req.body.esquema,
                configurations: req.body.configurations,
                creationMoment: tests[0].creationMoment,
                updateMoment: Date.now(),
                executionMoment: executionMoment, // se verifica
                totalErrors: tests[0].totalErrors,
                executable: true, // Aún por verificar
                datafile: tests[0].datafile
            });
            console.log(test);
            Test.updateOne({ _id: req.params.id }, test).then(result => {
                if (result.n > 0) {
                    return res.status(200).json({ message: "Update successful!" });
                } else {
                    return res.status(401).json({ message: "Not authorized!" });
                }
            }).catch(err => {
                console.log(err);
            });

        }
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a test failed!"
        });
    }
};