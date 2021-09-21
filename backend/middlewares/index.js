const validateFields = require('../middlewares/validate-fields');
const validateJWT = require('../middlewares/validate-jwt');
const validateRoles = require('../middlewares/validate-roles');
const validateFile = require('../middlewares/validate-file');
const validateImage = require('../middlewares/validate-image');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validateRoles,
    ...validateFile,
    ...validateImage
};