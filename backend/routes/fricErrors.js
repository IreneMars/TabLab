const express = require("express");
const router = express.Router();

const {
    validateJWT,
} = require("../middlewares");

const {
    getFricErrors
} = require("../controllers/fricErrors");

router.get("/", [
    validateJWT,
], getFricErrors);

module.exports = router;