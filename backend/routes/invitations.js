const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    getInvitations,
    createInvitation,
    updateInvitation,
    deleteInvitation
} = require("../controllers/invitations");

const {
    invitationExistsById,
    workspaceExistsById,
} = require("../helpers");

const {
    validateJWT,
    validateFields,
} = require("../middlewares");

router.get("/",
    validateJWT,
    getInvitations);

router.post("/", [
    validateJWT,
    check('receiver', 'The receiver email is not valid').isEmail(),
    check('workspace', 'The ID is not a valid Mongo ID').isMongoId(),
    check('workspace').custom(workspaceExistsById),
    validateFields
], createInvitation);

router.put("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(invitationExistsById),
    validateFields,
], updateInvitation);

router.delete("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(invitationExistsById),
    validateFields,
], deleteInvitation);

module.exports = router;