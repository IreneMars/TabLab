const express = require("express");

const UserController = require("../controllers/users");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { emailExists, userExistsById } = require('../helpers/db-validators');

router.get('/', UserController.getUsers);

router.post("/login", UserController.userLogin);

router.get("/:workspaceId", checkAuth, UserController.getUsersByWorkspace);

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
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userExistsById),
    // check('rol').custom(isValidRole),
    validateFields
], UserController.editUser);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userExistsById),
    validateFields
], UserController.deleteUser);
// falta delete y put
module.exports = router;
