const mongoose = require('mongoose');

const configurationSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title is mandatory'],
        minLength: 1,
        maxLength: 100
    },
    creationMoment: {
        type: Date,
        required: false
    },
    errorCode: {
        type: String,
        required: [true, 'The error code is mandatory'],
    },
    extraParams: {
        type: Map,
        of: String,
        required: [false],
    },
    datafile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Datafile",
        required: true
    }
});

configurationSchema.pre('save', function(next) {
    this.creationMoment = Date.now();
    next();
});

configurationSchema.methods.toJSON = function() {
    const { __v, ...configuration } = this.toObject();
    return configuration;
}

module.exports = mongoose.model('Configuration', configurationSchema);