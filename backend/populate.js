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
} = require("./models");
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

async function populate(host) {
    console.log("Populating database...")
    console.log("Using host: " + host)
    var dataPath = null;
    if (host == "http://localhost:3000") {
        dataPath = path.resolve("./populate_dev.json");
    } else if (host == "https://tablab-app-prepro.herokuapp.com") {
        dataPath = path.resolve("./populate_prepro.json");
    } else {
        dataPath = path.resolve("./populate_prod.json");
    }
    const rawData = fs.readFileSync(dataPath);
    const populate_json_data = JSON.parse(rawData);
    reports = { "errored_models": [], "reports": [] };


    //users
    try {
        console.log("Populating users...")
        userCollectionExists = await User.exists({});
        console.log("User collection exists: " + userCollectionExists)
        if (userCollectionExists) {
            await User.collection.drop();
        }
        await User.createCollection();
        var usersResult = await User.insertMany(populate_json_data.users, { ordered: false, rawResult: true });
        [message, rep] = create_report('user', usersResult, populate_json_data.users);
        reports.reports.push({ "message": message, "report": rep });
        console.log("User collection populated!")
    } catch (err) {
        reports.errored_models.push({ "User": err });
    }
    // workspaces
    try {
        console.log("Populating workspaces...")
        workspaceCollectionExists = await Workspace.exists({});
        console.log("Workspace collection exists: " + workspaceCollectionExists)
        if (workspaceCollectionExists) {
            await Workspace.collection.drop();
        }
        await Workspace.createCollection();
        var workspacesResult = await Workspace.insertMany(populate_json_data.workspaces, { ordered: false, rawResult: true });
        [message, rep] = create_report('workspace', workspacesResult, populate_json_data.workspaces);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Workspace collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Workspace": err });
    }
    // roles
    try {
        console.log("Populating roles...")
        roleCollectionExists = await Role.exists({});
        console.log("Role collection exists: " + roleCollectionExists)
        if (roleCollectionExists) {
            await Role.collection.drop();
        }
        await Role.createCollection();
        var rolesResult = await Role.insertMany(populate_json_data.roles, { ordered: false, rawResult: true });
        [message, rep] = create_report('role', rolesResult, populate_json_data.roles);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Role collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Role": err });
    }

    // invitations
    try {
        console.log("Populating invitations...")
        invitationCollectionExists = await Invitation.exists({});
        console.log("Invitation collection exists: " + invitationCollectionExists)
        if (invitationCollectionExists) {
            await Invitation.collection.drop();
        }
        await Invitation.createCollection();
        var invitationsResult = await Invitation.insertMany(populate_json_data.invitations, { ordered: false, rawResult: true });
        [message, rep] = create_report('invitation', invitationsResult, populate_json_data.invitations);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Invitation collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Invitation": err });
    }

    // Collections
    try {
        console.log("Populating collections...")
        collectionCollectionExists = await Collection.exists({});
        console.log("Collection collection exists: " + collectionCollectionExists)
        if (collectionCollectionExists) {
            await Collection.collection.drop();
        }
        await Collection.createCollection();
        var collectionsResult = await Collection.insertMany(populate_json_data.collections, { ordered: false, rawResult: true });
        [message, rep] = create_report('collection', collectionsResult, populate_json_data.collections);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Collection collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Collection": err });
    }

    // Datafiles
    try {
        console.log("Populating datafiles...")
        datafileCollectionExists = await Datafile.exists({});
        console.log("Datafile collection exists: " + datafileCollectionExists)
        if (datafileCollectionExists) {
            await Datafile.collection.drop();
        }
        await Datafile.createCollection();
        var datafilesResult = await Datafile.insertMany(populate_json_data.datafiles, { ordered: false, rawResult: true });
        [message, rep] = create_report('datafile', datafilesResult, populate_json_data.datafiles);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Datafile collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Datafile": err });
    }

    // Esquemas
    try {
        console.log("Populating esquemas...")
        esquemaCollectionExists = await Esquema.exists({});
        console.log("Esquema collection exists: " + esquemaCollectionExists)
        if (esquemaCollectionExists) {
            await Esquema.collection.drop();
        }
        await Esquema.createCollection();
        var esquemasResult = await Esquema.insertMany(populate_json_data.esquemas, { ordered: false, rawResult: true });
        [message, rep] = create_report('esquema', esquemasResult, populate_json_data.esquemas);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Esquema collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Esquema": err });
    }

    //Configurations
    try {
        console.log("Populating configurations...")
        configurationCollectionExists = await Configuration.exists({});
        console.log("Configuration collection exists: " + configurationCollectionExists)
        if (configurationCollectionExists) {
            await Configuration.collection.drop();
        }
        await Configuration.createCollection();
        var configurationsResult = await Configuration.insertMany(populate_json_data.configurations, { ordered: false, rawResult: true });
        [message, rep] = create_report('configuration', configurationsResult, populate_json_data.configurations);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Configuration collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Configuration": err });
    }

    // Tests
    try {
        console.log("Populating tests...")
        testCollectionExists = await Test.exists({});
        console.log("Test collection exists: " + testCollectionExists)
        if (testCollectionExists) {
            await Test.collection.drop();
        }
        await Test.createCollection();
        var testsResult = await Test.insertMany(populate_json_data.tests, { ordered: false, rawResult: true });
        [message, rep] = create_report('test', testsResult, populate_json_data.tests);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Test collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Test": err });
    }

    // Activities
    try {
        console.log("Populating activities...")
        activityCollectionExists = await Activity.exists({});
        console.log("Activity collection exists: " + activityCollectionExists)
        if (activityCollectionExists) {
            await Activity.collection.drop();
        }
        await Activity.createCollection();
        var activitiesResult = await Activity.insertMany(populate_json_data.activities, { ordered: false, rawResult: true });
        [message, rep] = create_report('activity', activitiesResult, populate_json_data.activities);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Activity collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Activity": err });
    }

    // Terminals
    try {
        console.log("Populating terminals...")
        terminalCollectionExists = await Terminal.exists({});
        console.log("Terminal collection exists: " + terminalCollectionExists)
        if (terminalCollectionExists) {
            await Terminal.collection.drop();
        }
        await Terminal.createCollection();
        var terminalsResult = await Terminal.insertMany(populate_json_data.terminals, { ordered: false, rawResult: true });
        [message, rep] = create_report('terminal', terminalsResult, populate_json_data.terminals);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Terminal collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Terminal": err });
    }

    // FricErrors
    try {
        console.log("Populating frictionless errors...")
        fricErrorCollectionExists = await FricError.exists({});
        console.log("Frictionless Error collection exists: " + fricErrorCollectionExists)
        if (fricErrorCollectionExists) {
            await FricError.collection.drop();
        }
        await FricError.createCollection();
        var fricErrorsResult = await FricError.insertMany(populate_json_data.fricErrors, { ordered: false, rawResult: true });
        [message, rep] = create_report('fricError', fricErrorsResult, populate_json_data.fricErrors);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Frictionless Error collection populated!")
    } catch (err) {
        reports.errored_models.push({ "FricError": err });
    }

    // Global Config
    try {
        console.log("Populating global configuration...")
        gconfigCollectionExists = await GlobalConfiguration.exists({});
        console.log("Global configuration collection exists: " + gconfigCollectionExists)
        if (gconfigCollectionExists) {
            await GlobalConfiguration.collection.drop();
        }
        await GlobalConfiguration.createCollection();
        var globalConfigResult = await GlobalConfiguration.insertMany(populate_json_data.globalConfiguration, { ordered: false, rawResult: true });
        [message, rep] = create_report('globalConfig', globalConfigResult, populate_json_data.globalConfiguration);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Global configuration populated!")
    } catch (err) {
        reports.errored_models.push({ "Global Configuration": err });
    }

    // Suggestions
    try {
        console.log("Populating suggestions...")
        suggestionCollectionExists = await Suggestion.exists({});
        console.log("Suggestion collection exists: " + suggestionCollectionExists)
        if (suggestionCollectionExists) {
            await Suggestion.collection.drop();
        }
        await Suggestion.createCollection();
        var suggestionsResult = await Suggestion.insertMany(populate_json_data.suggestions, { ordered: false, rawResult: true });
        [message, rep] = create_report('suggestion', suggestionsResult, populate_json_data.suggestions);
        reports.reports.push({ "message": message, "report": rep });
        console.log("Suggestion collection populated!")
    } catch (err) {
        reports.errored_models.push({ "Suggestion": err });
    }

    fs.readdir(path.join("./uploads/datafiles"), (err, files) => {
        console.log("Cleaning and populating uploads/datafiles folder")
        if (err) console.log(err);

        for (var file of files) {
            const fileName = file;
            //eliminamos el file del directorio
            fs.unlink(path.join(path.join("./uploads/datafiles"), file), err => {
                if (err) throw err;
            });
            // lo copiamos de assets (si existe) y lo pegamos en el directorio del que lo eliminamos anteriormente
            if (host == "http://localhost:3000") {
                if (fs.existsSync("./assets/" + fileName)) {
                    fs.copyFile("./assets/" + fileName, "./uploads/datafiles/" + fileName, function(err) {
                        if (err) throw err
                        console.log('Successfully copied!')
                    })
                }
            }
        }
    });

    fs.readdir(path.join("./uploads/esquemas"), (err, files) => {
        console.log("Cleaning and populating uploads/esquemas folder")
        if (err) console.log(err);

        for (var file of files) {
            const fileName = file;
            fs.unlink(path.join(path.join("./uploads/esquemas"), file), err => {
                if (err) throw err;
            });
            if (host == "http://localhost:3000") {
                if (fs.existsSync("./assets/" + fileName)) {
                    fs.copyFile("./assets/" + fileName, "./uploads/esquemas/" + fileName, function(err) {
                        if (err) throw err
                        console.log('Successfully copied!')
                    })
                }
            }
        }
    });

    fs.readdir(path.join("./uploads/users"), (err, files) => {
        console.log("Cleaning and populating uploads/users folder")
        if (err) console.log(err);

        for (var file of files) {
            const fileName = file;
            fs.unlink(path.join(path.join("./uploads/users"), file), err => {
                if (err) throw err;
            });
            if (host == "http://localhost:3000") {
                if (fs.existsSync("./assets/" + fileName)) {
                    fs.copyFile("./assets/" + fileName, "./uploads/users/" + fileName, function(err) {
                        if (err) throw err
                        console.log('Successfully copied!')
                    })
                }
            }
        }
    });
    fs.readdir(path.join("./output"), (err, files) => {
        console.log("Cleaning and populating output folder")
        if (err) console.log(err);

        for (var file of files) {
            const fileName = file;
            fs.unlink(path.join(path.join("./output"), file), err => {
                if (err) throw err;
            });
            if (host == "http://localhost:3000") {
                if (fs.existsSync("./assets/" + fileName)) {
                    fs.copyFile("./assets/" + fileName, "./output/" + fileName, function(err) {
                        if (err) throw err
                        console.log('Successfully copied!')
                    })
                }
            }
        }
    });
    console.log("Fin")
    return reports;
};


//"https://tablab-app.herokuapp.com"
//"http://localhost:3000"
//"https://tablab-app-prepro.herokuapp.com"
populate("http://localhost:3000");