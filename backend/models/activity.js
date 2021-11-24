const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    message: {
        type: String,
        required: [true, 'The message is mandatory'],
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: [true, 'Workspace is mandatory'],
    },
    workspaceTitle: {
        type: String,
        required: [true, 'Workspace title is mandatory'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'The author is mandatory'],
    },
    authorName: {
        type: String,
        required: [true, 'Author name is mandatory'],
    },
    coleccion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: false,
    },
    coleccionTitle: {
        type: String,
        required: false,
    },
    datafile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Datafile",
        required: false
    },
    datafileTitle: {
        type: String,
        required: false
    },
    creationMoment: {
        type: String,
        required: false
    }
});

activitySchema.pre('save', function(next) {
    this.creationMoment = Date.now();
    next();
});

activitySchema.methods.toJSON = function() {
    const { __v, ...activity } = this.toObject();
    return activity;
}

module.exports = mongoose.model('Activity', activitySchema);