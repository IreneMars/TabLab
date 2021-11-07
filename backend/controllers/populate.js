const { User, Workspace, Role, Invitation, Collection, Datafile, Test, Esquema, Configuration } = require("../models");

const path = require("path");
const fullPath = path.resolve("backend/populate.json");
const fs = require('fs');

const rawdata = fs.readFileSync(fullPath);
const populate_json_data = JSON.parse(rawdata);

var create_report = (model_name, result, data) => {
    message = "";
    report = { 'model': model_name, 'insertionCount': '', 'insertions': [], errors: [] };
    if ('insertedCount' in result && result.insertedCount === data.length) {
        message = "All data was inserted (" + result.insertedCount + " out of " + data.length + ").";
        report.insertionCount = result.insertedCount;
        report.insertions = result.ops;
        report.errors = [];
    } else if ('insertedCount' in result && result.insertedCount !== data.length) {
        message = "Some data was inserted (" + result.insertedCount + " out of " + data.length + ").";
        report.insertionCount = result.insertedCount;
        report.insertions = result.ops;
        report.errors = result.mongoose.validationErrors;
    } else {
        report.insertionCount = '0';
        report.insertions = [];
        report.errors = result.mongoose.validationErrors;
        message = "All data was already inserted (" + data.length + " out of " + data.length + ").";
    }
    return [message, report];
};

exports.populate = async(req, res, next) => {
    reports = { "errored_models": [], "reports": [] };
    //users
    try {
        User.collection.drop();
        var usersResult = await User.insertMany(populate_json_data.users, { ordered: false, rawResult: true });
        [message, rep] = create_report('user', usersResult, populate_json_data.users);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "User": err });
    }
    // workspaces
    try {
        Workspace.collection.drop();
        var workspacesResult = await Workspace.insertMany(populate_json_data.workspaces, { ordered: false, rawResult: true });
        [message, rep] = create_report('workspace', workspacesResult, populate_json_data.workspaces);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Workspace": err });
    }
    // roles
    try {
        Role.collection.drop();
        var rolesResult = await Role.insertMany(populate_json_data.roles, { ordered: false, rawResult: true });
        [message, rep] = create_report('role', rolesResult, populate_json_data.roles);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Role": err });
    }

    // invitations
    try {
        Invitation.collection.drop();
        var invitationsResult = await Invitation.insertMany(populate_json_data.invitations, { ordered: false, rawResult: true });
        [message, rep] = create_report('invitation', invitationsResult, populate_json_data.invitations);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Invitation": err });
    }

    // Collections
    try {
        Collection.collection.drop();
        var collectionsResult = await Collection.insertMany(populate_json_data.collections, { ordered: false, rawResult: true });
        [message, rep] = create_report('collection', collectionsResult, populate_json_data.collections);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Collection": err });
    }

    // Datafiles
    try {
        Datafile.collection.drop();
        var datafilesResult = await Datafile.insertMany(populate_json_data.datafiles, { ordered: false, rawResult: true });
        [message, rep] = create_report('datafile', datafilesResult, populate_json_data.datafiles);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Datafile": err });
    }

    // Esquemas
    try {
        Esquema.collection.drop();
        var esquemasResult = await Esquema.insertMany(populate_json_data.esquemas, { ordered: false, rawResult: true });
        [message, rep] = create_report('esquema', esquemasResult, populate_json_data.esquemas);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Esquema": err });
    }

    try {
        Configuration.collection.drop();
        var configurationsResult = await Configuration.insertMany(populate_json_data.configurations, { ordered: false, rawResult: true });
        [message, rep] = create_report('configuration', configurationsResult, populate_json_data.configurations);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Configuration": err });
    }

    // Tests
    try {
        Test.collection.drop();
        var testsResult = await Test.insertMany(populate_json_data.tests, { ordered: false, rawResult: true });
        [message, rep] = create_report('test', testsResult, populate_json_data.tests);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Test": err });
    }

    return res.status(200).json({
        data: reports
    });
};
