const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const { deleteRole } = require("../controllers/roles");
const { workspaceExistsById } = require("../helpers");
const { 
    validateJWT, 
    validateFields 
} = require("../middlewares");

router.delete("/:workspaceId", [ 
    validateJWT,
    check('workspaceId', 'The ID is not a valid Mongo ID').isMongoId(), 
    check('workspaceId').custom(workspaceExistsById), 
    validateFields,
], deleteRole);

module.exports = router;