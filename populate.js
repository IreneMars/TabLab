require('dotenv').config();
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
} = require("./backend/models");
const fs = require('fs');
const path = require("path");
const mongoose = require('mongoose');
const { dbConnection } = require('./backend/database/config');

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

async function populate() {
    var hostName = null;
    if (argv.host) {
        if (typeof(argv.host) == "boolean") {
            return new Error("No host was given! You should include -h <hostName> or --host <hostName> param.");
        }
        hostName = argv.host;
    } else if (argv.h) {
        hostName = argv.h;
    } else {
        return new Error("No host was given! You should include -h <hostName> or --host <hostName> param.");
    }
    await dbConnection(process.env.MONGODB_CNN);

    console.log("Populating database...");
    console.log("Using host: " + hostName);
    var dataPath = null;
    if (hostName == "http://localhost:3000") {
        dataPath = "populate/populate_dev.json";
    } else if (hostName == "https://tablab-app-prepro.herokuapp.com") {
        dataPath = "populate/populate_prepro.json";
    } else {
        dataPath = "populate/populate_prod.json";
    }
    const rawData = fs.readFileSync(dataPath);
    const populate_json_data = JSON.parse(rawData);
    reports = { "errored_models": [], "reports": [] };


    //users
    try {
        console.log("Populating users...")
        var userCollectionExists = await User.exists({});
        console.log("User collection exists: " + userCollectionExists)
        if (userCollectionExists) {
            await User.collection.drop();
        }
        await User.createCollection();
        await User.insertMany(populate_json_data.users, { ordered: false, rawResult: true });
        console.log("User collection populated!")
    } catch (err) {
        console.log(err);
    }
    // workspaces
    try {
        console.log("Populating workspaces...")
        var workspaceCollectionExists = await Workspace.exists({});
        console.log("Workspace collection exists: " + workspaceCollectionExists)
        if (workspaceCollectionExists) {
            await Workspace.collection.drop();
        }
        await Workspace.createCollection();
        await Workspace.insertMany(populate_json_data.workspaces, { ordered: false, rawResult: true });
        console.log("Workspace collection populated!")
    } catch (err) {
        console.log(err);
    }
    // roles
    try {
        console.log("Populating roles...")
        var roleCollectionExists = await Role.exists({});
        console.log("Role collection exists: " + roleCollectionExists)
        if (roleCollectionExists) {
            await Role.collection.drop();
        }
        await Role.createCollection();
        await Role.insertMany(populate_json_data.roles, { ordered: false, rawResult: true });
        console.log("Role collection populated!")
    } catch (err) {
        console.log(err);
    }

    // invitations
    try {
        console.log("Populating invitations...")
        var invitationCollectionExists = await Invitation.exists({});
        console.log("Invitation collection exists: " + invitationCollectionExists)
        if (invitationCollectionExists) {
            await Invitation.collection.drop();
        }
        await Invitation.createCollection();
        await Invitation.insertMany(populate_json_data.invitations, { ordered: false, rawResult: true });
        console.log("Invitation collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Collections
    try {
        console.log("Populating collections...")
        var collectionCollectionExists = await Collection.exists({});
        console.log("Collection collection exists: " + collectionCollectionExists)
        if (collectionCollectionExists) {
            await Collection.collection.drop();
        }
        await Collection.createCollection();
        await Collection.insertMany(populate_json_data.collections, { ordered: false, rawResult: true });
        console.log("Collection collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Datafiles
    try {
        console.log("Populating datafiles...")
        var datafileCollectionExists = await Datafile.exists({});
        console.log("Datafile collection exists: " + datafileCollectionExists)
        if (datafileCollectionExists) {
            await Datafile.collection.drop();
        }
        await Datafile.createCollection();
        await Datafile.insertMany(populate_json_data.datafiles, { ordered: false, rawResult: true });
        console.log("Datafile collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Esquemas
    try {
        console.log("Populating esquemas...")
        var esquemaCollectionExists = await Esquema.exists({});
        console.log("Esquema collection exists: " + esquemaCollectionExists)
        if (esquemaCollectionExists) {
            await Esquema.collection.drop();
        }
        await Esquema.createCollection();
        await Esquema.insertMany(populate_json_data.esquemas, { ordered: false, rawResult: true });
        console.log("Esquema collection populated!")
    } catch (err) {
        console.log(err);
    }

    //Configurations
    try {
        console.log("Populating configurations...")
        var configurationCollectionExists = await Configuration.exists({});
        console.log("Configuration collection exists: " + configurationCollectionExists)
        if (configurationCollectionExists) {
            await Configuration.collection.drop();
        }
        await Configuration.createCollection();
        await Configuration.insertMany(populate_json_data.configurations, { ordered: false, rawResult: true });
        console.log("Configuration collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Tests
    try {
        console.log("Populating tests...")
        var testCollectionExists = await Test.exists({});
        console.log("Test collection exists: " + testCollectionExists)
        if (testCollectionExists) {
            await Test.collection.drop();
        }
        await Test.createCollection();
        await Test.insertMany(populate_json_data.tests, { ordered: false, rawResult: true });
        console.log("Test collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Activities
    try {
        console.log("Populating activities...")
        var activityCollectionExists = await Activity.exists({});
        console.log("Activity collection exists: " + activityCollectionExists)
        if (activityCollectionExists) {
            await Activity.collection.drop();
        }
        await Activity.createCollection();
        await Activity.insertMany(populate_json_data.activities, { ordered: false, rawResult: true });
        console.log("Activity collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Terminals
    try {
        console.log("Populating terminals...")
        var terminalCollectionExists = await Terminal.exists({});
        console.log("Terminal collection exists: " + terminalCollectionExists)
        if (terminalCollectionExists) {
            await Terminal.collection.drop();
        }
        await Terminal.createCollection();
        await Terminal.insertMany(populate_json_data.terminals, { ordered: false, rawResult: true });
        console.log("Terminal collection populated!")
    } catch (err) {
        console.log(err);
    }

    // FricErrors
    try {
        console.log("Populating frictionless errors...")
        var fricErrorCollectionExists = await FricError.exists({});
        console.log("Frictionless Error collection exists: " + fricErrorCollectionExists)
        if (fricErrorCollectionExists) {
            await FricError.collection.drop();
        }
        await FricError.createCollection();
        await FricError.insertMany(populate_json_data.fricErrors, { ordered: false, rawResult: true });
        console.log("Frictionless Error collection populated!")
    } catch (err) {
        console.log(err);
    }

    // Global Config
    try {
        console.log("Populating global configuration...")
        var gconfigCollectionExists = await GlobalConfiguration.exists({});
        console.log("Global configuration collection exists: " + gconfigCollectionExists)
        if (gconfigCollectionExists) {
            await GlobalConfiguration.collection.drop();
        }
        await GlobalConfiguration.createCollection();
        await GlobalConfiguration.insertMany(populate_json_data.globalConfiguration, { ordered: false, rawResult: true });
        console.log("Global configuration populated!")
    } catch (err) {
        console.log(err);
    }

    // Suggestions
    try {
        console.log("Populating suggestions...")
        var suggestionCollectionExists = await Suggestion.exists({});
        console.log("Suggestion collection exists: " + suggestionCollectionExists)
        if (suggestionCollectionExists) {
            await Suggestion.collection.drop();
        }
        await Suggestion.createCollection();
        await Suggestion.insertMany(populate_json_data.suggestions, { ordered: false, rawResult: true });
        console.log("Suggestion collection populated!")
    } catch (err) {
        console.log(err);
    }

    fs.readdir(path.join("backend/assets/datafiles"), (err, files) => {
        console.log("Uploading files from backend/assets/datafiles folder...")
        try {
            if (err) {
                console.log(err);
            } else {
                if (files.length === 0) {
                    console.log("There are no files to upload!")
                } else {
                    for (var file of files) {
                        //eliminamos el file del directorio si existe
                        if (fs.existsSync("backend/uploads/datafiles/" + file)) {
                            fs.unlinkSync(path.join(path.join("backend/uploads/datafiles"), file));
                            console.log(`Successfully deleted ${file}!`)
                        }
                        // lo copiamos de assets y lo pegamos en el directorio del que lo eliminamos anteriormente
                        if (hostName == "http://localhost:3000") {
                            fs.copyFileSync("backend/assets/datafiles/" + file, "backend/uploads/datafiles/" + file);
                            console.log(`Successfully copied ${file}!`)
                        }
                    }
                }
            }
        } catch (err) {
            console.log("Error uploading files from assets/datafiles folder: " + err)
        }
    });

    fs.readdir(path.join("backend/assets/esquemas"), (err, files) => {
        console.log("Uploading files from backend/assets/esquemas folder...")
        try {
            if (err) {
                console.log(err);
            } else {
                if (files.length === 0) {
                    console.log("There are no files to upload!")
                } else {
                    for (var file of files) {
                        if (fs.existsSync("backend/uploads/esquemas/" + file)) {
                            fs.unlinkSync(path.join(path.join("backend/uploads/esquemas"), file));
                            console.log(`Successfully deleted ${file}!`)
                        }
                        if (hostName == "http://localhost:3000") {
                            fs.copyFileSync("backend/assets/esquemas/" + file, "backend/uploads/esquemas/" + file);
                            console.log(`Successfully copied ${file}!`)
                        }
                    }
                }
            }
        } catch (err) {
            console.log("Error uploading files from assets/esquemas folder: " + err)
        }
    });

    fs.readdir(path.join("backend/assets/users"), (err, files) => {
        console.log("Uploading files from backend/assets/users folder...")
        try {
            if (err) {
                console.log(err);
            } else {
                if (files.length === 0) {
                    console.log("There are no files to upload!")
                } else {
                    for (var file of files) {
                        if (fs.existsSync("backend/uploads/users/" + file)) {
                            fs.unlinkSync(path.join(path.join("backend/uploads/users"), file));
                            console.log(`Successfully deleted ${file}!`)
                        }
                        if (hostName == "http://localhost:3000") {
                            fs.copyFileSync("backend/assets/users/" + file, "backend/uploads/users/" + file);
                            console.log(`Successfully copied ${file}!`)
                        }
                    }
                }
            }
        } catch (err) {
            console.log("Error uploading files from assets/users folder: " + err)
        }
    });

    fs.readdir(path.join("backend/assets/reports"), (err, files) => {
        console.log("Uploading files from backend/assets/reports folder...")
        try {
            if (err) {
                console.log(err);
            } else {
                if (files.length === 0) {
                    console.log("There are no files to upload!")
                } else {
                    for (var file of files) {
                        if (fs.existsSync("backend/output/" + file)) {
                            fs.unlinkSync(path.join(path.join("backend/output"), file));
                            console.log(`Successfully deleted ${file}!`)
                        }
                        if (hostName == "http://localhost:3000") {
                            fs.copyFileSync("backend/assets/reports/" + file, "backend/output/" + file);
                            console.log(`Successfully copied ${file}!`)
                        }
                    }
                }
            }
        } catch (err) {
            console.log("Error uploading files from assets/reports folder: " + err)
        }
        mongoose.connection.close()
    });
};

//"https://tablab-app.herokuapp.com"
//"http://localhost:3000"
//"https://tablab-app-prepro.herokuapp.com"
populate();