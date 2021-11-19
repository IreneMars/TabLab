const mongoose = require('mongoose');

const suggestionSchema = mongoose.Schema({
    errorCode: {
        type: String,
        required: [true, 'The error code is mandatory'],
    },
    tags: {
        type: [String],
        required: false,
    },
    label: {
        type: String,
        required: false
    },
    fieldName: {
        type: String,
        required: false
    },
    fieldPosition: {
        type: Number,
        required: false
    },
    rowPosition: {
        type: Number,
        required: false
    },
    errorMessage: {
        type: String,
        required: false
    },
    errorCell: {
        type: String,
        required: false
    },
    datafile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Datafile",
        required: true
    }
});

module.exports = mongoose.model('Suggestion', suggestionSchema);