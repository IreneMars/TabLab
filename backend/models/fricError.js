const mongoose = require('mongoose');

const fricErrorSchema = mongoose.Schema({
    errorCode: { 
        type: String, 
        required: true 
    },
    extraParams: { 
        type: Map, 
        of: String, 
        required: true 
    },
});

module.exports = mongoose.model('FricError', fricErrorSchema);
