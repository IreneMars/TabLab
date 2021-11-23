const bcrypt = require("bcryptjs");

const { User } = require("../models");

const { googleVerify, generateJWT } = require('../helpers');

exports.login = async(req, res) => {
    try {
        const fetchedUser = await User.findOne({ username: req.body.username });
        if (!fetchedUser) { // verify if user exists
            return res.status(400).json({
                message: "Username not found."
            });
        }
        if (!fetchedUser.status) { // verify if status is active
            return res.status(400).json({
                message: "User status is false (not active)."
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, fetchedUser.password);
        if (!validPassword) { // verify password
            return res.status(400).json({
                message: "Incorrect password."
            });
        }

        // JWT generation
        const token = await generateJWT(fetchedUser._id);
        return res.status(200).json({
            token: token,
            expiresIn: 3600,
            user: fetchedUser,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Login failed!"
        });
    }
};

exports.googleLogin = async(req, res) => {
    const { tokenId } = req.body;
    console.log(req.body);
    try {
        const { email, name, img } = await googleVerify(tokenId);
        var fetchedUser = await User.findOne({ email: email });
        if (!fetchedUser) {
            // Tengo que crearlo
            const data = {
                name,
                email,
                password: ':P',
                img,
                google: true
            };
            fetchedUser = new User(data);
            await fetchedUser.save();
        }
        // Si el usuario en DB
        if (!fetchedUser.status) {
            return res.status(401).json({
                msg: 'Talk to the admin, user blocked.'
            });
        }
        // JWT generation
        const token = await generateJWT(fetchedUser._id);

        return res.status(200).json({
            token: token,
            expiresIn: 3600,
            user: fetchedUser
        });
    } catch (error) {
        return res.status(400).json({
            msg: 'Invalid Google token.'
        });
    }
};