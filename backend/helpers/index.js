const dbValidators = require('./db-validators');
const generateJWT   = require('./generate-jwt');
const googleVerify = require('./google-verify');
const { uploadObject, deleteObject, deleteFolder } = require('./s3');

module.exports = {
    ...dbValidators,
    ...generateJWT,
    ...googleVerify,
    uploadObject,
    deleteObject,
    deleteFolder
}