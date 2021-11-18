const mongoose = require('mongoose');

const globalConfigurationSchema = mongoose.Schema({
    limitUsers: {
        type: Number,
        min: 1,
        required: false,
    },
    limitWorkspaces: {
        type: Number,
        min: 1,
        required: false,
    },
});

module.exports = mongoose.model('GlobalConfiguration', globalConfigurationSchema);