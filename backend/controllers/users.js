const bcrypt = require("bcryptjs");
const { User, Role, Workspace } = require("../models");

exports.getUsersByWorkspace = async(req, res) => {
    try {
        const roles = await Role.find({ 'workspace': req.params.workspaceId });
        var user_ids = roles.map(function(elem) {
            return elem.user.toString();
        });
        var users = [];
        for (var role of roles) {
            const user = await User.findById(role.user);
            user._doc['roleId'] = role._id;
            user._doc['roleName'] = role.role;
            users.push(user);
        }
        return res.status(200).json({
            message: "Users fetched successfully!",
            users: users,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching users failed!"
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
            message: "Successful fetching!",
            user: user,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching a user failed!"
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
        const savedUser = await user.save();
        const workspace = new Workspace({
            title: 'Espacio de Trabajo Personal',
            description: '',
            creationMoment: null,
            mandatory: false,
        });
        const savedWorkspace = await workspace.save();
        const role = new Role({
            role: 'owner',
            workspace: savedWorkspace._id,
            user: savedUser._id,
        });
        const savedRole = await role.save();

        return res.status(201).json({
            message: "User created!",
            user: savedUser,
            workspace: savedWorkspace,
            role: savedRole,
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
            if (!validCurrentPassword) { // verify password
                return res.status(400).json({
                    message: "Incorrect current password."
                });
            } else if (!validNewPassword) {
                return res.status(400).json({
                    message: "The new and the repeated password are not identical."
                });
            } else {
                const hash = await bcrypt.hash(req.body.newPass, 10);
                user.password = hash;
            }
        }

        await User.findByIdAndUpdate(req.params.id, user);
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
    current_user_id = req.userData.userId;
    try {
        const { id } = req.params;
        // We don't delete it physically, but we mark its status as false
        const user = await User.findById(id);
        if (id !== current_user_id || user.role !== 'ADMIN') {
            return res.status(403).json({
                message: "You are not authorized to delete this user!"
            });
        }
        await User.findByIdAndUpdate(id, { status: false });
        const updatedUser = await User.findById(id);
        return res.status(200).json({
            message: "User deleted! (status: false)",
            user: updatedUser
        });
    } catch (err) {
        return res.status(500).json({
            message: "Deleting an user failed!"
        });
    }
};