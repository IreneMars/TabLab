const { Role,Esquema, Datafile, Configuration, Test } = require("../models");

const bufferedSpawn = require('buffered-spawn');
var spawn = require("child_process").spawn;
const { execFile, execFileSync } = require('child_process');
//const io = require('../socket.js').getio();

const fs = require('fs');

// const io = require("socket.io")(3000, {});
// io.on("connection", (socket) => {
//     console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
//     socket.on('my other event', function(data) {
//         console.log(data);
//     });
// });

exports.createReport = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const tests = await Test.find({ _id: req.query.testId });
        if (tests.length !== 1) {
            return res.status(500).json({
                message: "Creating an error report failed!"
            });
        }
        const datafiles = await Datafile.find({ _id: tests[0].datafile });
        const esquemas = await Esquema.find({ _id: tests[0].esquema });
        const configurations = await Configuration.find({ _id: { $in: tests[0].configurations } });
        if (datafiles.length !== 1) {
            return res.status(500).json({
                message: "Creating an error report failed!"
            });
        }
        const roles = await Role.find({ 'workspace': datafiles[0].workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(401).json({
                message: "Not Authorized!"
            });
        }
        var esquema = null;
        if (esquemas.length === 1) {
            esquema = esquemas[0].contentPath;
        }
        const errorCode = configurations[0].errorCode;
        split1 = datafiles[0].contentPath.split('.');
        split2 = split1[0].split('/');
        const errorReportPath = 'backend/output/' + split2[2] + '_errors.csv';

        var myProcess = spawn('python', ["backend/scripts/validation.py", errorReportPath, esquema, datafiles[0].contentPath, errorCode]);
        // myProcess.stdout.setEncoding('utf-8');
        // myProcess.stdout.on('data', function(data) {
        //     io.emit("message", data);

        // });
        // myProcess.stderr.setEncoding('utf-8');
        // myProcess.stderr.on('data', function(data) {
        //     io.emit("message", data);
        // });

        // const execBuffer = execFileSync(
        //     'python', ["backend/scripts/validation.py", errorReportPath, esquema, datafiles[0].contentPath, errorCode], { encoding: 'utf-8' }
        // );

        //console.log(execBuffer);
        return res.status(200).json({
            message: "Creation of error report successful!",
            buffer: null // execBuffer
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Creating an error report failed!"
        });
    }
};
