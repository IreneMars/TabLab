const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema({
    title: { type: String, required: true, minLength: 1, maxLength: 100 },
    description: { type: String, required: false, maxLength: 200 },
    mandatory: { type: Boolean, required: true },
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Workspace', workspaceSchema);
