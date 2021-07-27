const express = require("express");

const PopulateController = require("../controllers/populate")

const router = express.Router();
router.get("", PopulateController.populate);

module.exports = router;
