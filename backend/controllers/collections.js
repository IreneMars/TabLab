const {Role, Collection, Datafile} = require("../models");

exports.getCollectionsByWorkspace = async(req, res) => {
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

exports.createCollection = async(req, res) => {
    const current_user_id = req.userData.userId;    
    try {
        const roles = await Role.find({ workspace: req.body.workspace, user: current_user_id });// test if the current user is inside the workspace
        if(roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to create a collection inside this workspace."
            });
        }
        const collection = new Collection({
            title: req.body.title,
            workspace: req.body.workspace
        });
        const createdCollection = await collection.save();
        
        return res.status(201).json({
            message: "Collection created successfully!",
            collection: createdCollection
        });        
        
    } catch (err) {
        return res.status(500).json({
            message: "Creating a collection failed!"
        });
    }
};

exports.updateCollection = async(req, res) => {
    current_user_id = req.userData.userId;
    try {
        const roles = await Role.find({ workspace: req.body.workspace, user: current_user_id });
        if(roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to update a collection from this workspace."
            });
        } else {
            await Collection.findByIdAndUpdate(req.params.id,{title: req.body.title});
            const updatedCollection = await Collection.findById(req.params.id);
            return res.status(200).json({ 
                message: "Update successful!",
                collection: updatedCollection
            });                                      
        }    
    } catch (err) {
        return res.status(500).json({
            message: "Updating a collection failed!"
        });
    }
};


exports.deleteCollection = async(req, res) => {
    const current_user_id = req.userData.userId;
    try {
        const collection = await Collection.findById(req.params.id);
        const roles = await Role.find({ workspace: collection.workspace, user: current_user_id });
        if(roles.length !== 1) {
            return res.status(403).json({
                message: "You are not authorized to delete a collection from this workspace."
            });
        } 
        await Collection.deleteOne({ _id: req.params.id });
        return res.status(200).json({ 
            message: "Collection deleted successfully!" 
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Deleting a collection failed!"
        });
    }
};
