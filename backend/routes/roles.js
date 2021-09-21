const express = require("express");

const RolesController = require("../controllers/roles");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.delete("/:id", validateJWT, RolesController.deleteRole);

module.exports = router;