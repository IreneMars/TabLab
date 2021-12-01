const { Role, Esquema, Datafile, Configuration, Test } = require("../models");
const { execFileSync } = require('child_process');
const { uploadObject } = require('../helpers');
const fs = require('fs');
const axios = require('axios');

exports.createReport = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    const testId = req.body.testId;

    try {
        const test = await Test.findById(testId);
        if (!test.executable) {
            return res.status(403).json({
                message: "This test is not executable."
            });
        }
        const datafile = await Datafile.findById(test.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Creating an error report failed! (Datafile not found)."
            });
        }

        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to execute this test!"
            });
        }

        const esquema = await Esquema.findById(test.esquema);
        var response;
        var esquemaFilePath = "";
        if (esquema) {
            // Get Esquema de AWS S3
            response = await axios.get(esquema.contentPath);
            esquemaNameSplit = esquema.contentPath.split('/');
            var esquemaFileName = esquemaNameSplit[esquemaNameSplit.length - 1];
            esquemaFilePath = "backend/uploads/esquemas/" + esquemaFileName;
            let rawData = JSON.stringify(response.data);
            fs.writeFileSync(esquemaFilePath, rawData);
        }

        const configurations = await Configuration.find({ _id: { $in: test.configurations } });
        var configurationsAux = [];
        if (configurations) {
            for (var config of configurations) {
                var configAux = { "code": config.errorCode }
                if (config.extraParams) {
                    configAux = {...configAux, ...config.extraParams }
                        // for (var extraParam of config.extraParams) {
                        //     configAux[extraParam] = config.extraParams[extraParam]
                        // }
                }
                configurationsAux.push(configAux);
            }
        }

        // Get Datafile from AWS S3
        response = await axios.get(datafile.contentPath);
        datafileNameSplit = datafile.contentPath.split('/');
        var datafileFileName = datafileNameSplit[datafileNameSplit.length - 1];
        var datafileFilePath = "backend/uploads/datafiles/" + datafileFileName;
        fs.writeFileSync(datafileFilePath, response.data);

        const errorReportFileName = datafileFileName.split('.')[0] + "-" + Date.now() + '_errors.csv';
        const errorReportPath = 'backend/output/' + errorReportFileName;

        const testData = [test.title, errorReportPath, datafile.delimiter, esquemaFilePath, datafileFilePath, configurationsAux, datafile.errLimit];
        const execBuffer = execFileSync(
            'python', ["backend/scripts/validation.py", testData[1], testData[2], testData[3], testData[4], testData[5], testData[6]], { encoding: 'utf-8' }
        );

        var rawdata = "";
        var rawDataSplit = [];
        var uploadedFileUrl = null;
        var errors = 0;
        if (fs.existsSync(errorReportPath)) {
            rawdata = fs.readFileSync(errorReportPath, 'utf8');
            rawDataSplit = rawdata.split('\n');
            rawDataSplit.shift();

            // Upload Report to AWS S3
            const fileFullName = `reports/${errorReportFileName}`;
            uploadedFileUrl = await uploadObject(rawdata, fileFullName);

            const lines = rawdata.split("\n");
            errors = lines.length - 1;
        }

        test.reportPath = uploadedFileUrl;
        if (errors > 0) {
            test.status = 'failed';
        } else {
            test.status = 'passed';
        }
        test.updateMoment = Date.now();
        test.executionMoment = Date.now();
        test.totalErrors = errors;
        test.executable = false;

        return res.status(200).json({
            message: "Creation of error report and update of a test successful! ",
            testUpdates: test,
            execBuffer: execBuffer,
            rawData: rawDataSplit
        });
    } catch (err) {
        return res.status(500).json({
            message: "Creating an error report and updating a test failed!" + err
        });
    }
};