const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title is mandatory'],
        minLength: 1,
        maxLength: 100
    },
    reportPath: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
        enum: ['pending', 'failed', 'passed']
    },
    esquema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Esquema",
        required: false
    },
    configurations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Configuration",
        required: false
    }],
    creationMoment: {
        type: String,
        required: false
    },
    updateMoment: {
        type: Date,
        required: false
    },
    executionMoment: {
        type: Date,
        required: false
    },
    totalErrors: {
        type: Number,
        required: false
    },
    executable: {
        type: Boolean,
        required: false
    },
    datafile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Datafile",
        required: true
    }
});

testSchema.pre('save', function(next) {
    this.updateMoment = Date.now();
    this.creationMoment = Date.now();
    this.status = 'pending';
    next();
});

testSchema.methods.toJSON = function() {
    const { __v, ...test } = this.toObject();
    return test;
}

module.exports = mongoose.model('Test', testSchema);