const mongoose = require('mongoose');

const invitationSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['rejected', 'accepted', 'pending', 'seen']
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    }
});

invitationSchema.methods.toJSON = function() {
    const { __v, ...invitation } = this.toObject();
    return invitation;
}

module.exports = mongoose.model('Invitation', invitationSchema);