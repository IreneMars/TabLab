const express = require("express");
const { check } = require('express-validator');
const router = express.Router();

const { createReport } = require("../controllers/reports");

const { validateJWT, validateFields } = require("../middlewares");

const {
    testExistsById,
} = require("../helpers");

router.put("/", [
    validateJWT,
    // check('testId', 'The ID is not a valid Mongo ID').isMongoId(),
    // check('testId').custom(testExistsById),
    // validateFields,
], createReport);

module.exports = router;