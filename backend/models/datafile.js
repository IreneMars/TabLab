const mongoose = require('mongoose');

const datafileSchema = mongoose.Schema({
    title: { type: String, required: true, minLength: 1, maxLength: 100 },
    description: { type: String, required: false, maxLength: 200 },
    contentPath: { type: String, required: false },
    limitErrors: { type: Number, required: false },
    delimiter: { type: String, required: false },
    coleccion: { type: mongoose.Schema.Types.ObjectId, ref: "Collection", required: false },
    workspace: { type: mongoose.Schema.Types.ObjectId, ref: "Workspace", required: true }
});

module.exports = mongoose.model('Datafile', datafileSchema);
