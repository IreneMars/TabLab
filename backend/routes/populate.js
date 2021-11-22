const express = require("express");

const { populate } = require("../controllers/populate")

const router = express.Router();

router.get("",
    populate);

module.exports = router;