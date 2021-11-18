const mongoose = require('mongoose');

const datafileSchema = mongoose.Schema({
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
    contentPath: {
        type: String,
        required: false
    },
    errLimit: {
        type: Number,
        required: false
    },
    coleccion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: false
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    }
});

module.exports = mongoose.model('Datafile', datafileSchema);