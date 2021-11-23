const { Router } = require('express');
const { check } = require('express-validator');
const { userExistsById, datafileExistsById } = require('../helpers');
const validateFile = require('../middlewares/validate-file');

const { validateJWT, validateFields } = require('../middlewares');
const router = Router();
const {
    updateFile,
    updatePhoto,
    updateEsquemaContent
} = require("../controllers/uploads");

router.put("/users/:id", [
    validateJWT, validateFile,
    check('id', 'El id debe de ser de mongo').isMongoId(),
    check('id').custom(userExistsById),
    validateFields
], updatePhoto);

router.put("/datafiles/:id", [
    validateJWT, validateFile,
    check('id', 'El id debe de ser de mongo').isMongoId(),
    check('id').custom(datafileExistsById),
    validateFields
], updateFile);

router.put("/esquema", [
    validateJWT,
], updateEsquemaContent);

module.exports = router;