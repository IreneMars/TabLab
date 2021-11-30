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

globalConfigurationSchema.methods.toJSON = function() {
    const { __v, ...globalConfiguration } = this.toObject();
    return globalConfiguration;
}

module.exports = mongoose.model('GlobalConfiguration', globalConfigurationSchema);