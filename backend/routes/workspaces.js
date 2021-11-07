const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const { 
    workspaceExistsById, 
} = require('../helpers/db-validators');
const { 
    validateJWT, 
    validateFields,
} = require("../middlewares");
const {
    getWorkspace,
    getWorkspaces,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace } = require("../controllers/workspaces");

router.get("/", 
    validateJWT, 
    getWorkspaces);
    
router.get("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(workspaceExistsById), 
], getWorkspace);


router.post("/",[
    validateJWT, 
    check('title', 'The title is mandatory').not().isEmpty(),
    check('title', 'The title must have between 1 and 100 characters').isLength({ min: 1, max: 100 }),
    check('mandatory', 'The mandatory attribute is mandatory').not().isEmpty(),
    validateFields,
], createWorkspace);

router.put("/:id", [ 
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(workspaceExistsById),
    validateFields,
], updateWorkspace);

router.delete("/:id", [ 
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(workspaceExistsById),
    validateFields,
], deleteWorkspace);

module.exports = router;