const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    workspaceExistsById,
    testExistsById,
    datafileExistsById
} = require('../helpers/db-validators');
const {
    validateJWT,
    validateFields,
} = require("../middlewares");
const {
    getTestsByWorkspace,
    getTest,
    createTest,
    updateTest,
    deleteTest
} = require("../controllers/tests");

router.get("/", [
    validateJWT,
    check('workspaceId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('workspaceId').custom(workspaceExistsById),
], getTestsByWorkspace);

router.get("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(testExistsById),
], getTest);

router.post("/", [
    validateJWT,
    check('title', 'The title is mandatory').not().isEmpty(),
    check('title', 'The title must have between 1 and 100 characters').isLength({ min: 1, max: 100 }),
    check('datafile', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafile').custom(datafileExistsById),
    validateFields,
], createTest);

router.put("/:testId", [
    validateJWT,
    check('testId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('testId').custom(testExistsById),
    validateFields,
], updateTest);

router.delete("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(testExistsById),
    validateFields,
], deleteTest);

module.exports = router;