const express = require("express");
const { check } = require('express-validator');
const { workspaceExistsById, datafileExistsById } = require('../helpers/db-validators');
const router = express.Router();
const { 
    validateJWT, 
    validateFields,
} = require("../middlewares");
const {
    getDatafile,
    createDatafile,
    updateDatafile,
    deleteDatafile
} = require("../controllers/datafiles");

router.get("/:id", [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(datafileExistsById), 
], getDatafile);

router.post("", [
    validateJWT,
    check('title', 'The title is mandatory').not().isEmpty(),
    check('title', 'The title must have between 1 and 100 characters').isLength({ min: 1, max: 100 }),
    check('workspace', 'The ID is not a valid Mongo ID').isMongoId(),
    check('workspace').custom(workspaceExistsById),
    validateFields,
], createDatafile);

router.put("/:id", [
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(datafileExistsById),
    validateFields,
], updateDatafile);

router.delete("/:id", [
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(datafileExistsById),
    validateFields,
], deleteDatafile);

module.exports = router;