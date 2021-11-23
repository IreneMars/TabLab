const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const {
    getActivityByUser,
    getActivityByWorkspace,
    // deleteActivitiesByUser
} = require("../controllers/activities");

const {
    userExistsById,
    workspaceExistsById,
} = require("../helpers");

const {
    validateJWT,
    validateFields
} = require("../middlewares");

router.get("/user/:userId", [
    validateJWT,
    check('userId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('userId').custom(userExistsById),
    validateFields
], getActivityByUser);

router.get("/workspace/:workspaceId", [
    validateJWT,
    check('workspaceId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('workspaceId').custom(workspaceExistsById),
    validateFields
], getActivityByWorkspace);

// router.delete("/:userId", [
//     validateJWT,
//     //isAdminRole,
//     check('userId', 'The ID is not a valid Mongo ID').isMongoId(),
//     check('userId').custom(userExistsById),
//     validateFields,
// ], deleteActivitiesByUser);

module.exports = router;