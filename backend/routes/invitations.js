const express = require("express");

const InvitationsController = require("../controllers/invitations");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();
router.post("", checkAuth, InvitationsController.createInvitation);

router.put("/:id", checkAuth, InvitationsController.updateInvitation);

router.get("", checkAuth, InvitationsController.getInvitations);

router.delete("/:id", checkAuth, InvitationsController.deleteInvitation);

module.exports = router;
