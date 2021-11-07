const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const { 
    esquemaExistsById,
    datafileExistsById
} = require('../helpers/db-validators');
const { 
    validateJWT, 
    validateFields,
} = require("../middlewares");
const {
    getEsquema,
    createEsquema,
    updateEsquema,
    deleteEsquema
} = require("../controllers/esquemas");

router.get("/:id", [
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(esquemaExistsById), 
 ], getEsquema);

router.post("/", [
    validateJWT, 
    check('title', 'The title is mandatory').not().isEmpty(),
    check('title', 'The title must have between 1 and 100 characters').isLength({ min: 1, max: 100 }),
    // // check('contentPath', 'The content path is mandatory').not().isEmpty(),
    check('datafile', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafile').custom(datafileExistsById),
    validateFields,
], createEsquema);

router.put("/:id", [
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(esquemaExistsById),
    check('datafile', 'The ID is not a valid Mongo ID').isMongoId(),
    check('datafile').custom(datafileExistsById),
    validateFields,
], updateEsquema);

router.delete("/:id", [
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(esquemaExistsById),
    validateFields,
], deleteEsquema);

module.exports = router;