const express = require("express");

const WorkspaceController = require("../controllers/workspaces");

const { validateJWT } = require("../middlewares");

const router = express.Router();
router.post("", validateJWT, WorkspaceController.createWorkspace);

router.put("/:id", validateJWT, WorkspaceController.updateWorkspace);

router.get("", validateJWT, WorkspaceController.getWorkspaces);

router.get("/:id", validateJWT, WorkspaceController.getWorkspace);

router.delete("/:id", validateJWT, WorkspaceController.deleteWorkspace);

module.exports = router;