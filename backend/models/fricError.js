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

fricErrorSchema.methods.toJSON = function() {
    const { __v, ...fricError } = this.toObject();
    return fricError;
}

module.exports = mongoose.model('FricError', fricErrorSchema);