const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    updateRole,
    deleteRole
} = require("../controllers/roles");
const {
    roleExistsById,
    workspaceExistsById,
    userExistsById
} = require("../helpers");
const {
    validateJWT,
    validateFields
} = require("../middlewares");

router.put("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(roleExistsById),
    validateFields,
], updateRole);

router.delete("/:workspaceId", [
    validateJWT,
    check('workspaceId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('workspaceId').custom(workspaceExistsById),
    validateFields,
], deleteRole);

module.exports = router;