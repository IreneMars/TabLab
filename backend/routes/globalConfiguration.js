const express = require("express");
const { check } = require('express-validator');
const router = express.Router();

const {
    validateJWT,
    validateFields,
} = require("../middlewares");
const {
    getGlobalConfiguration,
    updateGlobalConfiguration,
} = require("../controllers/globalConfiguration");

router.get("/", [
    validateJWT,
    //validar que sea admin
], getGlobalConfiguration);

router.put("/", [
    validateJWT,
    //validar que sea admin
    validateFields,
], updateGlobalConfiguration);

module.exports = router;