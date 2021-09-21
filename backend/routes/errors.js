const express = require("express");

const ErrorsController = require("../controllers/errors");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.get("/:workspaceId", validateJWT, ErrorsController.createReport);

module.exports = router;