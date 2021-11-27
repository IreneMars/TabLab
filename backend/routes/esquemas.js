const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    esquemaExistsById,
    datafileExistsById
} = require('../helpers/db-validators');
const {
    validateJWT,
    validateFields,
} = require("../middlewares");
const {
    getEsquemasByDatafile,
    getEsquema,
    createEsquema,
    updateEsquema,
    deleteEsquema
} = require("../controllers/esquemas");

router.get("/datafile/:datafileId", [
    validateJWT,
    check('datafileId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafileId').custom(datafileExistsById),
], getEsquemasByDatafile);

router.get("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(esquemaExistsById),
], getEsquema);

router.delete("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(esquemaExistsById),
    validateFields,
], deleteEsquema);

module.exports = router;