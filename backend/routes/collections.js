const express = require("express");

const CollectionsController = require("../controllers/collections");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("", checkAuth, CollectionsController.createCollection);

router.put("/:id", checkAuth, CollectionsController.updateCollection);

router.get("/:workspaceId", checkAuth, CollectionsController.getCollectionsByWorkspace);

router.delete("/:id", checkAuth, CollectionsController.deleteCollection);

module.exports = router;
