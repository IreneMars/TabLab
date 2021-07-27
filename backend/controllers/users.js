const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Role = require("../models/role");

exports.getUsers = async(req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const query = { status: true };
    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
        .skip(Number(from))
        .limit(Number(limit))
    ]);
    res.json({
        total,
        users
    });
}

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
            message: "Invalid authentication credentials!"
        });
    }
};

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                process.env.JWT_KEY, { expiresIn: "3h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchedUser._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed"
            });
        });
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
        console.log(rest);
        if (password) {
            const hash = await bcrypt.hash(req.body.password, 10);
            rest.password = hash;
        }
        const user = await User.findByIdAndUpdate(id, rest);
        console.log(user);
        res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Modifying a user failed!"
        });
    }
};

exports.deleteUser = async(req, res = response) => {
    try {
        const { id } = req.params;
        // We don't delete it physically, but we mark its status as false
        const user = await User.findByIdAndUpdate(id, { status: false });
        return res.json(user);
    } catch (err) {
        return res.status(500).json({
            message: "Deleting a user failed!"
        });
    }
};
