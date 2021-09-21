const express = require("express");

const CollectionsController = require("../controllers/collections");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.post("", validateJWT, CollectionsController.createCollection);

router.put("/:id", validateJWT, CollectionsController.updateCollection);

router.get("/:workspaceId", validateJWT, CollectionsController.getCollectionsByWorkspace);

router.delete("/:id", validateJWT, CollectionsController.deleteCollection);

module.exports = router;