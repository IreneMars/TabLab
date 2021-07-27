const express = require("express");

const DatafilesController = require("../controllers/datafiles");

const checkAuth = require("../middlewares/check-auth");

const extractFile = require("../middlewares/file");

const router = express.Router();

router.post("", checkAuth, DatafilesController.createDatafile);

router.put("/:id", checkAuth, extractFile, DatafilesController.updateDatafile);

router.get("/:id", checkAuth, DatafilesController.getDatafile);

router.delete("/:id", checkAuth, DatafilesController.deleteDatafile);

module.exports = router;
