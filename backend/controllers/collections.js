const Role = require("../models/role");
const Workspace = require("../models/workspace");
const Collection = require("../models/collection");
const Datafile = require("../models/datafile");

exports.createCollection = async(req, res, next) => {
    // const current_user_id = req.userData.userId;
    try {
        const workspaces = await Workspace.find({ "_id": req.body.workspace }).exec();
        if (workspaces.length > 1) {
            res.status(500).json({
                message: "There are several workspaces with that id!"
            });
        } else if (workspaces.length === 0) {
            res.status(500).json({
                message: "There is no workspace with that id."
            });
        } else if (workspaces.length === 1) {
            const collection = new Collection({
                title: req.body.title,
                workspace: req.body.workspace
            });
            await collection.save(function(err, createdCollection) {
                res.status(201).json({
                    message: "Collection added successfully!",
                    invitation: {
                        ...createdCollection,
                        id: createdCollection._id
                    }
                });

            });
        }

    } catch (err) {
        res.status(500).json({
            message: "Creating a collection failed!"
        });
    }
};

exports.updateCollection = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const collections = await Collection.find({ _id: req.params.id }).exec();
        if (collections.length === 0 || collections.length > 1) {
            res.status(401).json({ message: "There is no unique collection with that id!" });
        } else if (collections.length === 1) {
            const roles = await Role.find({ workspace: collections[0].workspace, user: current_user_id }).exec();
            if (roles.length === 0 || roles.length > 1) {
                res.status(401).json({ message: "You are not authorized!" });
            } else if (roles.length === 1) {
                const collection = new Collection({
                    _id: req.params.id,
                    title: req.body.title,
                    workspace: collections[0].workspace
                });
                Collection.updateOne({ _id: req.params.id }, collection).then(result => {
                    if (result.n > 0) {
                        res.status(200).json({ message: "Update successful!" });
                    } else {
                        res.status(401).json({ message: "Not authorized!" });
                    }
                });
            }
        }
    } catch (err) {
        res.status(500).json({
            message: "Updating a collection failed!"
        });
    }
};

exports.getCollectionsByWorkspace = async(req, res, next) => {
    try {
        collections = await Collection.find({ 'workspace': req.params.workspaceId });
        orphanedDatafiles = await Datafile.find({ 'workspace': req.params.workspaceId, 'collection': null });
        var updatedCollections = [];
        if (collections.length > 0) {
            for (var collection of collections) {
                datafiles = await Datafile.find({ 'coleccion': collection._id });
                const updatedCollection = {
                    ...collection._doc,
                    datafiles: datafiles
                };
                updatedCollections.push(updatedCollection);
            }
        }

        return res.status(200).json({
            message: "Collections fetched successfully!",
            collections: updatedCollections,
            orphanedDatafiles: orphanedDatafiles
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching collections failed!"
        });
    }
};

exports.deleteCollection = async(req, res, next) => {
    try {
        const collection = Collection.findOne({ _id: req.params.id }).exec();
        if (!collection) {
            return res.status(401).json({ message: "Not authorized!" });
        } else {
            await Collection.deleteOne({ _id: req.params.id });
            return res.status(200).json({ message: "Collection deletion successful!" });
        }
    } catch (err) {
        res.status(500).json({
            message: "Deleting a collection failed!"
        });
    }
};
