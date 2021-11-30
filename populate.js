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
const { uploadObject, deleteFolder } = require("./backend/helpers");

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

    var mongodb_cnn;
    if (argv.mongo) {
        mongodb_cnn = argv.mongo;
    } else if (argv.m) {
        mongodb_cnn = argv.m;
    } else {
        mongodb_cnn = process.env.MONGODB_CNN;
    }

    console.log("Populating database...");

    console.log("Using MONGODB_CNN: " + mongodb_cnn)
    await dbConnection(mongodb_cnn);

    console.log("Using host: " + hostName);
    var dataPath = null;
    var s3bucket;
    if (hostName == "http://localhost:3000") {
        dataPath = "populate/populate_dev.json";
        s3bucket = "tab-lab-dev";
    } else if (hostName == "https://tablab-app-prepro.herokuapp.com") {
        dataPath = "populate/populate_prepro.json";
        s3bucket = "tab-lab-prepro";
    } else {
        dataPath = "populate/populate_prod.json";
        s3bucket = "tab-lab";
    }
    console.log("Using dataPath: " + dataPath);
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

    try {
        console.log("Deleting folders in S3...");

        await deleteFolder("datafiles", s3bucket);
        await deleteFolder("esquemas", s3bucket);
        await deleteFolder("users", s3bucket);
        await deleteFolder("reports", s3bucket);

        console.log("Folders in S3 deleted succesfully!");
    } catch (error) {
        console.log(error);
    }

    try {
        console.log("Uploading files to S3 from populate/populate_files/datafiles folder...");
        const files = fs.readdirSync(path.join("populate/populate_files/datafiles"));
        if (files.length === 0) {
            console.log("There are no files to upload!")
        } else {
            for (var file of files) {
                var fileData = fs.readFileSync(`populate/populate_files/datafiles/${file}`);
                var url = await uploadObject(fileData, `datafiles/${file}`, s3bucket);
                
                console.log(`Successfully uploaded ${file} with url ${url} to S3!`);
            }
        }
    } catch (error) {
        console.log("Error uploading files from populate/populate_files/datafiles folder: " + error)
    }

    try {
        console.log("Uploading files to S3 from populate/populate_files/esquemas folder...");
        const files = fs.readdirSync(path.join("populate/populate_files/esquemas"));
        if (files.length === 0) {
            console.log("There are no files to upload!")
        } else {
            for (var file of files) {
                var fileData = fs.readFileSync(`populate/populate_files/esquemas/${file}`);
                var url = await uploadObject(fileData, `esquemas/${file}`, s3bucket);
                
                console.log(`Successfully uploaded ${file} with url ${url} to S3!`);
            }
        }
    } catch (error) {
        console.log("Error uploading files from populate/populate_files/esquemas folder: " + error)
    }

    try {
        console.log("Uploading files to S3 from populate/populate_files/users folder...");
        const files = fs.readdirSync(path.join("populate/populate_files/users"));
        if (files.length === 0) {
            console.log("There are no files to upload!")
        } else {
            for (var file of files) {
                var fileData = fs.readFileSync(`populate/populate_files/users/${file}`);
                var url = await uploadObject(fileData, `users/${file}`, s3bucket);
                
                console.log(`Successfully uploaded ${file} with url ${url} to S3!`);
            }
        }
    } catch (error) {
        console.log("Error uploading files from populate/populate_files/users folder: " + error)
    }

    try {
        console.log("Uploading files to S3 from populate/populate_files/reports folder...");
        const files = fs.readdirSync(path.join("populate/populate_files/reports"));
        if (files.length === 0) {
            console.log("There are no files to upload!")
        } else {
            for (var file of files) {
                var fileData = fs.readFileSync(`populate/populate_files/reports/${file}`);
                var url = await uploadObject(fileData, `reports/${file}`, s3bucket);
                
                console.log(`Successfully uploaded ${file} with url ${url} to S3!`);
            }
        }
    } catch (error) {
        console.log("Error uploading files from populate/populate_files/reports folder: " + error)
    }

    mongoose.connection.close()
};

//"https://tablab-app.herokuapp.com"
//"http://localhost:3000"
//"https://tablab-app-prepro.herokuapp.com"
populate();