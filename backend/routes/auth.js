const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const { validateFields } = require('../middlewares');
const {
    login,
    googleLogin,
} = require('../controllers/auth');

router.post("/login", [
    check('username', 'The username is mandatory').not().isEmpty(),
    check('password', 'The password is mandatory').not().isEmpty(),
    validateFields
], login);

router.post('/google', [
    check('tokenId', 'The tokenId is mandatory').not().isEmpty(),
    validateFields
], googleLogin);

module.exports = router;