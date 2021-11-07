const express = require("express");

const { createReport } = require("../controllers/reports");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.get("/:workspaceId", 
    validateJWT, 
    createReport);

module.exports = router;