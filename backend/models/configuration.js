const mongoose = require('mongoose');

const configurationSchema = mongoose.Schema({
    title: { type: String, required: true, minLength: 1, maxLength: 100 },
    creationMoment: { type: Date, required: false },
    errorCode: { type: String, required: true },
    extraParams: { type: Map, of: String, required: true },
    datafile: { type: mongoose.Schema.Types.ObjectId, ref: "Datafile", required: true }
});

configurationSchema.pre('save', function(next) {
    this.creationMoment = Date.now();
    next();
});

module.exports = mongoose.model('Configuration', configurationSchema);
