const express = require("express");

const DatafilesController = require("../controllers/datafiles");

const { validateJWT } = require("../middlewares");

const extractFile = require("../middlewares/validate-file");

const router = express.Router();

router.post("", validateJWT, DatafilesController.createDatafile);

router.put("/:id", validateJWT, extractFile, DatafilesController.updateDatafile);

router.get("/:id", validateJWT, DatafilesController.getDatafile);

router.delete("/:id", validateJWT, DatafilesController.deleteDatafile);

module.exports = router;