const express = require("express");
const { check } = require('express-validator');

const UserController = require("../controllers/users");

const {
    validateFields,
    validateJWT,
    hasRole
} = require('../middlewares');

const { emailExists, userExistsById } = require('../helpers/db-validators');

const router = express.Router();

router.get('/', UserController.getUsers);

router.post("/signin", [
    check('username', 'The username is mandatory').not().isEmpty(),
    check('password', 'The password is mandatory').not().isEmpty(),
    validateFields
], UserController.signIn);

router.post('/google', [
    check('tokenId', 'The tokenId is mandatory').not().isEmpty(),
    validateFields
], UserController.googleSignin);

router.get("/:workspaceId", validateJWT, UserController.getUsersByWorkspace);

router.post("/signup", [
    check('username', 'The username is mandatory').not().isEmpty(),
    check('password', 'The password must have 4 characters or more').isLength({ min: 4 }),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(emailExists),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    // check('rol').custom(isValidRole),
    validateFields
], UserController.createUser);

router.put('/:id', [
    check('id', 'The ID is not valid').isMongoId(),
    check('id').custom(userExistsById),
    // check('rol').custom(isValidRole),
    validateFields
], UserController.editUser);

router.delete('/:id', [
    validateJWT,
    hasRole('ADMIN_ROLE'),
    check('id', 'The ID is not valid').isMongoId(),
    check('id').custom(userExistsById),
    validateFields
], UserController.deleteUser);
// falta delete y put
module.exports = router;