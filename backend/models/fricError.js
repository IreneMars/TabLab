const mongoose = require('mongoose');

const fricErrorSchema = mongoose.Schema({
    errorCode: {
        type: String,
        required: true
    },
    extraParams: {
        type: Object,
        required: false
    },
});

module.exports = mongoose.model('FricError', fricErrorSchema);