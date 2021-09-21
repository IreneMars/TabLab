const express = require("express");

const InvitationsController = require("../controllers/invitations");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.post("", validateJWT, InvitationsController.createInvitation);

router.put("/:id", validateJWT, InvitationsController.updateInvitation);

router.get("", validateJWT, InvitationsController.getInvitations);

router.delete("/:id", validateJWT, InvitationsController.deleteInvitation);

module.exports = router;