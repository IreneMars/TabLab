const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title is mandatory'],
        minLength: 1,
        maxLength: 100
    },
    description: {
        type: String,
        required: false,
        maxLength: 200
    },
    creationMoment: {
        type: String,
        required: false
    },
    mandatory: {
        type: Boolean,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

workspaceSchema.pre('save', function(next) {
    this.creationMoment = Date.now();
    next();
});

workspaceSchema.methods.toJSON = function() {
    const { __v, ...workspace } = this.toObject();
    return workspace;
}

module.exports = mongoose.model('Workspace', workspaceSchema);