const express = require("express");

const WorkspaceController = require("../controllers/workspaces");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();
router.post("", checkAuth, WorkspaceController.createWorkspace);

router.put("/:id", checkAuth, WorkspaceController.updateWorkspace);

router.get("", checkAuth, WorkspaceController.getWorkspaces);

router.get("/:id", checkAuth, WorkspaceController.getWorkspace);

router.delete("/:id", checkAuth, WorkspaceController.deleteWorkspace);

module.exports = router;
