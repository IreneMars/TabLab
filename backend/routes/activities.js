const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    getActivityByUser,
    deleteActivitiesByUser
} = require("../controllers/activities");

const {
    userExistsById,
} = require("../helpers");

const {
    validateJWT,
    validateFields
} = require("../middlewares");

router.get("/:userId", [
    validateJWT,
    check('userId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('userId').custom(userExistsById),
    validateFields
], getActivityByUser);

router.delete("/:userId", [
    validateJWT,
    //isAdminRole,
    check('userId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('userId').custom(userExistsById),
    validateFields,
], deleteActivitiesByUser);

module.exports = router;