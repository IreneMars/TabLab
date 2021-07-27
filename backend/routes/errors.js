const express = require("express");

const ErrorsController = require("../controllers/errors");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.get("/:workspaceId", checkAuth, ErrorsController.createReport);

module.exports = router;
