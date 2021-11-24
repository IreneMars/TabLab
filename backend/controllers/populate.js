const {
    User,
    Workspace,
    Role,
    Invitation,
    Collection,
    Datafile,
    Test,
    Esquema,
    Configuration,
    Activity,
    Terminal,
    FricError,
    GlobalConfiguration,
    Suggestion
} = require("../models");
const fs = require('fs');
const path = require("path");


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
    console.log("Populating database...")
    console.log("Using host: " + req.get("host"))
    var dataPath = null;
    if (req.get("host").includes("localhost")) {
        dataPath = path.resolve("backend/populate.json");
    } else if (req.get("host").includes("prepro")) {
        dataPath = path.resolve("backend/populate_prepro.json");
    } else {
        dataPath = path.resolve("backend/populate_prod.json");
    }
    const rawData = fs.readFileSync(dataPath);
    const populate_json_data = JSON.parse(rawData);
    reports = { "errored_models": [], "reports": [] };

    //users
    try {
        console.log("Users:")
        console.log(await User.exists({}))
        if (await User.exists({})) {
            await User.collection.drop();
        }
        await User.createCollection();
        var usersResult = await User.insertMany(populate_json_data.users, { ordered: false, rawResult: true });
        [message, rep] = create_report('user', usersResult, populate_json_data.users);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "User": err });
    }
    // workspaces
    try {
        console.log("Workspaces:")
        console.log(await Workspace.exists({}))
        if (await Workspace.exists({})) {
            await Workspace.collection.drop();
        }
        await Workspace.createCollection();
        var workspacesResult = await Workspace.insertMany(populate_json_data.workspaces, { ordered: false, rawResult: true });
        [message, rep] = create_report('workspace', workspacesResult, populate_json_data.workspaces);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Workspace": err });
    }
    // roles
    try {
        console.log("Roles:")
        console.log(await Role.exists({}))
        if (await Role.exists({})) {
            await Role.collection.drop();
        }
        await Role.createCollection();
        var rolesResult = await Role.insertMany(populate_json_data.roles, { ordered: false, rawResult: true });
        [message, rep] = create_report('role', rolesResult, populate_json_data.roles);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Role": err });
    }

    // invitations
    try {
        console.log("Invitations:")
        console.log(await Invitation.exists({}))
        if (await Invitation.exists({})) {
            await Invitation.collection.drop();
        }
        await Invitation.createCollection();
        var invitationsResult = await Invitation.insertMany(populate_json_data.invitations, { ordered: false, rawResult: true });
        [message, rep] = create_report('invitation', invitationsResult, populate_json_data.invitations);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Invitation": err });
    }

    // Collections
    try {
        console.log("Collections:")
        console.log(await Collection.exists({}))
        if (await Collection.exists({})) {
            await Collection.collection.drop();
        }
        await Collection.createCollection();
        var collectionsResult = await Collection.insertMany(populate_json_data.collections, { ordered: false, rawResult: true });
        [message, rep] = create_report('collection', collectionsResult, populate_json_data.collections);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Collection": err });
    }

    // Datafiles
    try {
        console.log("Datafiles:")
        console.log(await Datafile.exists({}))
        if (await Datafile.exists({})) {
            await Datafile.collection.drop();
        }
        await Datafile.createCollection();
        var datafilesResult = await Datafile.insertMany(populate_json_data.datafiles, { ordered: false, rawResult: true });
        [message, rep] = create_report('datafile', datafilesResult, populate_json_data.datafiles);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Datafile": err });
    }

    // Esquemas
    try {
        console.log("Esquemas:")
        console.log(await Esquema.exists({}))
        if (await Esquema.exists({})) {
            await Esquema.collection.drop();
        }
        await Esquema.createCollection();
        var esquemasResult = await Esquema.insertMany(populate_json_data.esquemas, { ordered: false, rawResult: true });
        [message, rep] = create_report('esquema', esquemasResult, populate_json_data.esquemas);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Esquema": err });
    }

    try {
        console.log("Configurations:")
        console.log(await Configuration.exists({}))
        if (await Configuration.exists({})) {
            await Configuration.collection.drop();
        }
        await Configuration.createCollection();
        var configurationsResult = await Configuration.insertMany(populate_json_data.configurations, { ordered: false, rawResult: true });
        [message, rep] = create_report('configuration', configurationsResult, populate_json_data.configurations);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Configuration": err });
    }

    // Tests
    try {
        console.log("Tests:")
        console.log(await Test.exists({}))
        if (await Test.exists({})) {
            await Test.collection.drop();
        }
        await Test.createCollection();
        var testsResult = await Test.insertMany(populate_json_data.tests, { ordered: false, rawResult: true });
        [message, rep] = create_report('test', testsResult, populate_json_data.tests);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Test": err });
    }

    // Activities
    try {
        console.log("Activities:")
        console.log(await Activity.exists({}))
        if (await Activity.exists({})) {
            await Activity.collection.drop();
        }
        await Activity.createCollection();
        var activitiesResult = await Activity.insertMany(populate_json_data.activities, { ordered: false, rawResult: true });
        [message, rep] = create_report('activity', activitiesResult, populate_json_data.activities);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Activity": err });
    }

    // Terminals
    try {
        console.log("Terminals:")
        console.log(await Terminal.exists({}))
        if (await Terminal.exists({})) {
            await Terminal.collection.drop();
        }
        await Terminal.createCollection();
        var terminalsResult = await Terminal.insertMany(populate_json_data.terminals, { ordered: false, rawResult: true });
        [message, rep] = create_report('terminal', terminalsResult, populate_json_data.terminals);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Terminal": err });
    }

    // FricErrors
    try {
        console.log("FricErrors:")
        console.log(await FricError.exists({}))
        if (await FricError.exists({})) {
            await FricError.collection.drop();
        }
        await FricError.createCollection();
        var fricErrorsResult = await FricError.insertMany(populate_json_data.fricErrors, { ordered: false, rawResult: true });
        [message, rep] = create_report('fricError', fricErrorsResult, populate_json_data.fricErrors);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "FricError": err });
    }

    // Global Config
    try {
        console.log("Global Configuration:")
        console.log(await GlobalConfiguration.exists({}))
        if (await GlobalConfiguration.exists({})) {
            await GlobalConfiguration.collection.drop();
        }
        await GlobalConfiguration.createCollection();
        var globalConfigResult = await GlobalConfiguration.insertMany(populate_json_data.globalConfiguration, { ordered: false, rawResult: true });
        [message, rep] = create_report('globalConfig', globalConfigResult, populate_json_data.globalConfiguration);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Global Configuration": err });
    }

    // Suggestions
    try {
        console.log("Suggestions:")
        console.log(await Suggestion.exists({}))
        if (await Suggestion.exists({})) {
            await Suggestion.collection.drop();
        }
        await Suggestion.createCollection();
        var suggestionsResult = await Suggestion.insertMany(populate_json_data.suggestions, { ordered: false, rawResult: true });
        [message, rep] = create_report('suggestion', suggestionsResult, populate_json_data.suggestions);
        reports.reports.push({ "message": message, "report": rep });
    } catch (err) {
        reports.errored_models.push({ "Suggestion": err });
    }

    fs.readdir(path.join("backend/uploads/datafiles"), (err, files) => {
        if (err) console.log(err);

        for (const file of files) {
            fs.unlink(path.join(path.join("backend/uploads/datafiles"), file), err => {
                if (err) throw err;
            });
        }
    });

    fs.readdir(path.join("backend/uploads/esquemas"), (err, files) => {
        if (err) console.log(err);

        for (const file of files) {
            fs.unlink(path.join(path.join("backend/uploads/esquemas"), file), err => {
                if (err) throw err;
            });
        }
    });

    fs.readdir(path.join("backend/uploads/users"), (err, files) => {
        if (err) console.log(err);

        for (const file of files) {
            fs.unlink(path.join(path.join("backend/uploads/users"), file), err => {
                if (err) throw err;
            });
        }
    });
    console.log("Fin")
    return res.status(200).json({
        data: reports
    });
};

exports.populateFile = async(req, res, next) => {
    try {
        if (req.file) {
            console.log(req.file.filename)
        }
        return res.status(200).json({
            message: "Uploaded file!",
            fileName: req.file.filename
        });
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }

}