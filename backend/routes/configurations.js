const express = require("express");

const ConfigurationsController = require("../controllers/configurations");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/:datafileId", checkAuth, ConfigurationsController.createConfiguration);

// router.get("", checkAuth, ConfigurationsController.getConfigurations);

router.delete("/:id", checkAuth, ConfigurationsController.deleteConfiguration);

router.get("/:id", checkAuth, ConfigurationsController.getConfiguration);

router.put("/:id", checkAuth, ConfigurationsController.updateConfiguration);

module.exports = router;
