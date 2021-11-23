const express = require("express");

const {
    populate,
    populateFile
} = require("../controllers/populate");
const validateFilePopulate = require("../middlewares/validate-file-populate");

const router = express.Router();

router.get("",
    populate);

router.get("/uploadFile",
    validateFilePopulate,
    populateFile);

module.exports = router;