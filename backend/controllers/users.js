const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {User, Role} = require("../models");

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

exports.getUser = async(req, res) => {
    const current_user_id = req.userData.userId;
    try {
        //Error if the user is fetching the data of another user
        if (current_user_id !== req.params.id) {            
            return res.status(403).json({ message: "You are not authorized to fetch this user!" });
        }        
        const user = await User.findById(req.params.id);
        return res.status(200).json({
            user: user,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a user failed!"
        });
    }
};

exports.getUsers = async(req, res) => {
    const { limit = 5, from = 0 } = req.query;
    const query = { status: true };
    try {
        const [total, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
        ]);
        return res.status(200).json({
            message: "Users fetched!",
            total,
            users
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching users failed!"
        });
    }
};

exports.getUsersByWorkspace = async(req, res) => {
    try {
        const roles = await Role.find({ 'workspace': req.params.workspaceId });
        var user_ids = roles.map(function(elem) {
            return elem.user.toString();
        });
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

exports.createUser = async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = new User({
            username: username,
            email: email,
            password: hash,
            role: "USER",
        });
        await user.save();
        return res.status(201).json({
            message: "User created!",
            user: user
        });
    } catch (err) {
        return res.status(500).json({
            message: "Creation of user failed!"
        });
    }
};


exports.updateUser = async(req, res) => {
    current_user_id = req.userData.userId;
    try {
        const user = await User.findById(req.params.id);          
        if (req.body.email !== null) {
            user.email = req.body.email;
        } else if (req.body.newPass === null) {
            user.name = req.body.name; 
            user.username = req.body.username; 
        } else if (req.body.newPass !== null) {
            const validCurrentPassword = await bcrypt.compare(req.body.actualPass, user.password);
            const validNewPassword = (req.body.newPass === req.body.repeatPass);
            if (!validCurrentPassword ) { // verify password
                return res.status(400).json({
                    message: "Incorrect current password."
                });
            } else if(!validNewPassword) {
                return res.status(400).json({
                    message: "The new and the repeated password are not identical."
                });
            } else {
                const hash = await bcrypt.hash(req.body.newPass, 10);
                user.password = hash;
            }                  
        }
        
        await User.findByIdAndUpdate(req.params.id,user);          
        const updatedUser = await User.findById(req.params.id);
        return res.status(200).json({
            message: "User updated successfully!",
            user: updatedUser
        });
        
    } catch (err) {
        return res.status(500).json({
            message: "Updating an user failed!"
        });
    }
};

exports.deleteAccount = async(req, res) => {
    try {
        const { id } = req.params;
        // We don't delete it physically, but we mark its status as false
        const user = await User.findByIdAndUpdate(id, { status: false });

        return res.status(200).json({
            message: "User deleted! (status: false)",
            user: user
        });
    } catch (err) {
        return res.status(500).json({
            message: "Deleting an user failed!"
        });
    }
};