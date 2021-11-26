const { Role, Esquema, Datafile, Configuration, Test, Suggestion } = require("../models");
const { execFileSync } = require('child_process');
const fs = require('fs');

exports.createReport = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    const testId = req.body.testId;
    const url = req.protocol + "://" + req.get("host") + "/";

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
        const esquema = await Esquema.findById(test.esquema);
        var esquemaContentPath = "";
        if (esquema) {
            esquemaContentPath = esquema.contentPath;
            esquemaContentPath = esquema.contentPath.replace(url, 'backend/uploads/');
        }

        const configurations = await Configuration.find({ _id: { $in: test.configurations } });

        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to execute this test!"
            });
        }

        var configurationsAux = [];
        for (var config of configurations) {
            configAux = { "code": config.errorCode }
            if (config.extraParams) {
                for (var extraParam of config.extraParams.keys()) {
                    configAux[extraParam] = config.extraParams.get(extraParam)
                }
            }
            configurationsAux.push(configAux);
        }
        datafile.contentPath = datafile.contentPath.replace(url, 'backend/uploads/');
        split1 = datafile.contentPath.split('.');
        split2 = split1[0].split('/');
        const errorReportPath = 'backend/output/' + split2[3] + '_errors.csv';

        const testData = [test.title, errorReportPath, datafile.delimiter, esquemaContentPath, datafile.contentPath, configurationsAux, datafile.errLimit];
        console.log(testData)
            //var myProcess = spawn('python', ["backend/scripts/validation.py", errorReportPath, esquemaContentPath, datafile.contentPath, errorCode]);
        const execBuffer = execFileSync(
            'python', ["backend/scripts/validation.py", testData[1], testData[2], testData[3], testData[4], testData[5], testData[6]], { encoding: 'utf-8' }
            //'python', ["backend/scripts/validation.py", errorReportPath, esquemaContentPath, datafile.contentPath, configurationsAux], { encoding: 'utf-8' }
        );
        const rawdata = fs.readFileSync(testData[1], options = { encoding: 'utf8' });
        var rawDataSplit = rawdata.split('\n');
        rawDataSplit.shift();

        const lines = rawdata.split("\n");
        const errors = lines.length - 1;
        test.reportPath = errorReportPath
        if (errors > 0) {
            test.status = 'failed';
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
            message: "Creating an error report and updating a test failed!"
        });
    }
};