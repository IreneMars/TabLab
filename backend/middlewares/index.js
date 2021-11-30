const validateFields = require('../middlewares/validate-fields');
const validateJWT = require('../middlewares/validate-jwt');
const validateFile = require('../middlewares/validate-file');
const validateFilePopulate = require('../middlewares/validate-file-populate');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validateFile,
    ...validateFilePopulate
};