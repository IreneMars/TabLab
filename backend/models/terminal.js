const { Schema, model } = require('mongoose');

const terminalSchema = Schema({
    content: {
        type: [String],
        required: [false],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'The user is mandatory'],
    }
});

terminalSchema.methods.toJSON = function() {
    const { __v, ...terminal } = this.toObject();
    return terminal;
}

module.exports = model('Terminal', terminalSchema);