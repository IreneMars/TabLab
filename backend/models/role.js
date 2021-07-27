const { Schema, model } = require('mongoose');

const roleSchema = Schema({
    role: {
        type: String,
        required: [true, 'The role is mandatory'],
        enum: ['admin', 'owner', 'member']
    },
    workspace: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: [true, 'The workspace is mandatory'],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'The user is mandatory'],
    }
});

module.exports = model('Role', roleSchema);
