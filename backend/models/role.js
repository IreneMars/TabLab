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

roleSchema.pre('save', function(next) {
    this.role = 'member';
    next();
});

roleSchema.methods.toJSON = function() {
    const { __v, ...role } = this.toObject();
    return role;
}

module.exports = model('Role', roleSchema);