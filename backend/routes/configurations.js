const express = require("express");

const ConfigurationsController = require("../controllers/configurations");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.post("/:datafileId", validateJWT, ConfigurationsController.createConfiguration);

// router.get("", validateJWT, ConfigurationsController.getConfigurations);

router.delete("/:id", validateJWT, ConfigurationsController.deleteConfiguration);

router.get("/:id", validateJWT, ConfigurationsController.getConfiguration);

router.put("/:id", validateJWT, ConfigurationsController.updateConfiguration);

module.exports = router;