const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    configurationExistsById,
    datafileExistsById
} = require('../helpers/db-validators');
const {
    validateJWT,
    validateFields,
} = require("../middlewares");
const {
    getConfigurationsByDatafile,
    getConfiguration,
    createConfiguration,
    updateConfiguration,
    deleteConfiguration,
} = require("../controllers/configurations");

router.get("/datafile/:datafileId", [
    validateJWT,
    check('datafileId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafileId').custom(datafileExistsById),
], getConfigurationsByDatafile);

router.get("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(configurationExistsById),
], getConfiguration);

router.post("/", [
    validateJWT,
    check('title', 'The title is mandatory').not().isEmpty(),
    check('title', 'The title must have between 1 and 100 characters').isLength({ min: 1, max: 100 }),
    check('errorCode', 'The error code is mandatory').not().isEmpty(),
    check('extraParams', 'Extra parameters are mandatory').not().isEmpty(),
    check('datafile', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafile').custom(datafileExistsById),
    validateFields,
], createConfiguration);

router.put("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(configurationExistsById),
    validateFields,
], updateConfiguration);

router.delete("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(configurationExistsById),
    validateFields,
], deleteConfiguration);

module.exports = router;