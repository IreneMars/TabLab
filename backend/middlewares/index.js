const validateFields = require('../middlewares/validate-fields');
const validateJWT = require('../middlewares/validate-jwt');
const validateFile = require('../middlewares/validate-file');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validateFile,
};