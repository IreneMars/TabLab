const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    createRole,
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

router.post("/", [
    validateJWT,
    check('role', 'The role is mandatory').not().isEmpty(),
    check('workspace', 'The workspace ID is not a valid Mongo ID').isMongoId(),
    check('workspace').custom(workspaceExistsById),
    check('user', 'The user ID is not a valid Mongo ID').isMongoId(),
    check('user').custom(userExistsById),
    validateFields,
], createRole);

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