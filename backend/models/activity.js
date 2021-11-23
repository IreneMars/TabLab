const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    message: {
        type: String,
        required: [true, 'The message is mandatory'],
    },
    workspace: {
        type: Map,
        of: String,
        required: [true, 'The workspace is mandatory'],
    },
    author: {
        type: Map,
        of: String,
        required: [true, 'The author is mandatory'],
    },
    coleccion: {
        type: Map,
        of: String,
        required: false
    },
    datafile: {
        type: Map,
        of: String,
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