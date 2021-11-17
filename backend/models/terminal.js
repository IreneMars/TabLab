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

module.exports = model('Terminal', terminalSchema);