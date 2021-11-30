const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title is mandatory'],
        minLength: 1,
        maxLength: 100
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    }
});

collectionSchema.methods.toJSON = function() {
    const { __v, ...coleccion } = this.toObject();
    return coleccion;
}

module.exports = mongoose.model('Collection', collectionSchema);