const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    getTerminal,
    updateTerminal
} = require("../controllers/terminals");

const {
    terminalExistsById,
    userExistsById
} = require("../helpers");

const {
    validateJWT,
    validateFields
} = require("../middlewares");

router.get("/:userId", [
    validateJWT,
    check('userId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('userId').custom(userExistsById),
], getTerminal);

router.put("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(terminalExistsById),
    validateFields,
], updateTerminal);

module.exports = router;