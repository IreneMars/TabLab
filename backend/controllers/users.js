const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Role = require("../models/role");

const { googleVerify } = require('../helpers/google-verify');

const { generateJWT } = require('../helpers/generate-jwt');
const user = require("../models/user");

exports.getUsers = async(req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const query = { status: true };
    try {
        const [total, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
        ]);
        res.status(200).json({
            message: "Users fetched!",
            total,
            users
        });
    } catch (err) {
        res.status(500).json({
            message: "Fetching users failed!"
        });
    }
};

exports.createUser = async(req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = new User({
            username: username,
            email: email,
            password: hash
        });
        await user.save();
        res.status(201).json({
            message: "User created!",
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Creation of user failed!"
        });
    }
};

exports.signIn = async(req, res, next) => {
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
        res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: fetchedUser._id,
            userEmail: fetchedUser.email
        });
    } catch (err) {
        res.status(500).json({
            message: "Login failed!"
        });
    }
};

exports.googleSignin = async(req, res = response) => {
    console.log("Google Sign In");
    const { tokenId } = req.body;
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
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }
        // JWT generation
        const token = await generateJWT(fetchedUser._id);

        res.status(200).json({
            user: fetchedUser,
            token: token,
            expiresIn: 3600,
            userId: fetchedUser._id,
            userEmail: fetchedUser.email
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Token de Google no es válido'
        });
    }
};


exports.getUsersByWorkspace = async(req, res, next) => {
    try {
        const roles = await Role.find({ 'workspace': req.params.workspaceId }).exec();
        var user_ids = roles.map(function(elem) {
            return elem.user.toString();
        }); // { role: 'owner', workspace: '60aeaf40d0e8477348250ac9', user: '60ad88d2a74d2e58cc611a3f' },
        user_ids = [...new Set(user_ids)];
        User.find({ '_id': { $in: user_ids } })
            .then(documents => {
                return res.status(200).json({
                    message: "Users fetched successfully!",
                    users: documents,
                });
            })
            .catch(error => {
                return res.status(500).json({
                    message: "Fetching users failed!"
                });
            });

    } catch (err) {
        return res.status(500).json({
            message: "Fetching users failed!"
        });
    }
};

exports.editUser = async(req, res = response) => {
    try {
        const { id } = req.params;
        const { _id, password, google, email, ...rest } = req.body;
        if (password) {
            const hash = await bcrypt.hash(req.body.password, 10);
            rest.password = hash;
        }
        const user = await User.findByIdAndUpdate(id, rest);
        res.status(200).json({
            message: "User modified!",
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Modifying a user failed!"
        });
    }
};

exports.deleteUser = async(req, res = response) => {
    try {
        const { id } = req.params;
        // We don't delete it physically, but we mark its status as false
        const user = await User.findByIdAndUpdate(id, { status: false });
        res.status(200).json({
            message: "User deleted! (status: false)",
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Deleting a user failed!"
        });
    }
};