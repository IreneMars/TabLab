const express = require("express");

const RolesController = require("../controllers/roles");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.delete("/:id", checkAuth, RolesController.deleteRole);

module.exports = router;
