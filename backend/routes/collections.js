const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    getCollectionsByWorkspace,
    createCollection,
    updateCollection,
    deleteCollection 
} = require("../controllers/collections");

const { 
    collectionExistsById, 
    workspaceExistsById 
} = require("../helpers");

const { 
    validateJWT, 
    validateFields 
} = require("../middlewares");


router.get("/:workspaceId", [
    validateJWT, 
    check('workspaceId', 'The ID is not a valid Mongo ID').isMongoId(), 
    check('workspaceId').custom(workspaceExistsById), 
    validateFields 
], getCollectionsByWorkspace);

router.post("", [
    validateJWT,
    check('title','The title is mandatory').not().isEmpty(),
    check('title', 'The title must have between 1 and 100 characters').isLength({ min: 1, max: 100 }),
    check('workspace', 'The ID is not a valid Mongo ID').isMongoId(), 
    check('workspace').custom(workspaceExistsById),
    validateFields
], createCollection);

router.put("/:id", [ 
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(), 
    check('id').custom(collectionExistsById), 
    validateFields,
], updateCollection);

router.delete("/:id", [
    validateJWT,
    //isAdminRole,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(), 
    check('id').custom(collectionExistsById),
    validateFields,
], deleteCollection);

module.exports = router;