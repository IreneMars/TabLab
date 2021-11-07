const express = require("express");
const { check } = require('express-validator');
const { 
    isValidRole, 
    emailExists, 
    userExistsById, 
    workspaceExistsById 
} = require('../helpers');
const router = express.Router();
const {
    validateFields,
    validateJWT,
    hasRole
} = require('../middlewares');

const {
    getUser,
    getUsers,
    login,
    googleLogin,
    getUsersByWorkspace,
    createUser,
    updateUser,
    deleteAccount
} = require('../controllers/users');

router.get('/', 
    validateJWT, 
    getUsers);

router.get("/:id", [
    validateJWT, 
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(userExistsById),
 ], getUser);

router.get("/workspace/:workspaceId", [
    validateJWT,
    check('workspaceId', 'The ID is not a valid Mongo ID').isMongoId(),
    check('workspaceId').custom(workspaceExistsById),
], getUsersByWorkspace);

router.post("/signup", [
    check('username', 'The username is mandatory').not().isEmpty(),
    check('password', 'The password must have 4 characters or more').isLength({ min: 4 }),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(emailExists),
    check('role').custom(isValidRole),
    validateFields
], createUser);

router.post("/login", [
    check('username', 'The username is mandatory').not().isEmpty(),
    check('password', 'The password is mandatory').not().isEmpty(),
    validateFields
], login);

router.post('/google', [
    check('tokenId', 'The tokenId is mandatory').not().isEmpty(),
    validateFields
], googleLogin);

router.put('/:id', [
    validateJWT,
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(userExistsById),
    check('role').custom(isValidRole),
    validateFields
], updateUser);

router.delete('/:id', [
    validateJWT,
    hasRole('ADMIN','USER'),
    check('id', 'The ID is not a valid Mongo ID').isMongoId(),
    check('id').custom(userExistsById),
    validateFields
], deleteAccount);

module.exports = router;