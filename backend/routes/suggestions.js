const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    suggestionExistsById,
    datafileExistsById
} = require('../helpers/db-validators');
const {
    validateJWT,
    validateFields,
} = require("../middlewares");
const {
    getSuggestionsByDatafile,
    createSuggestionsByDatafile,
    applySuggestion,
    deleteSuggestionsByDatafile,
    deleteSuggestion
} = require("../controllers/suggestions");

router.get("/get/:datafileId", [
    validateJWT,
    check('datafileId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafileId').custom(datafileExistsById),
], getSuggestionsByDatafile);

router.post("/add/:datafileId", [
    validateJWT,
    check('rawData', 'Rawdata is mandatory').not().isEmpty(),
    check('datafileId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafileId').custom(datafileExistsById),
    validateFields,
], createSuggestionsByDatafile);

router.put("/apply/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(suggestionExistsById),
    validateFields,
], applySuggestion);

router.delete("/deleteAll/:datafileId", [
    validateJWT,
    check('datafileId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafileId').custom(datafileExistsById),
    validateFields,
], deleteSuggestionsByDatafile);

router.delete("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(suggestionExistsById),
    validateFields,
], deleteSuggestion);

module.exports = router;