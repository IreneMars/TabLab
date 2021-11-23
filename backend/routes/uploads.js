const { Router } = require('express');
const { check } = require('express-validator');
const { userExistsById, datafileExistsById, esquemaExistsById } = require('../helpers');
const validateFile = require('../middlewares/validate-file');

const { validateJWT, validateFields } = require('../middlewares');
const router = Router();
const {
    updateFile,
    updatePhoto,
    addEsquemaContent,
    updateEsquemaContent,
    inferEsquemaContent
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

router.post("/esquema/create", [
    validateJWT,
], addEsquemaContent);

router.put("/esquema/:esquemaId", [
    validateJWT,
    check('esquemaId', 'El id debe de ser de mongo').isMongoId(),
    check('esquemaId').custom(esquemaExistsById),
    validateFields
], updateEsquemaContent);

router.get("/esquema/infer/:datafileId", [
    validateJWT,
    check('datafileId', 'El id debe de ser de mongo').isMongoId(),
    check('datafileId').custom(datafileExistsById),
    validateFields
], inferEsquemaContent);

module.exports = router;