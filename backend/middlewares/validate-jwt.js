const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async(req, res, next) => {
    var token = null;
    if (req.headers.authorization) {
        token = req.headers.authorization.split(" ")[1];
    }
    
    if (!token) {
        return res.status(401).json({
            message: 'There is no token in the petition'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        // Read the user that corresponds to the uid
        const user = await User.findById(uid);

        if (!user) {
            return res.status(401).json({
                message: 'Invalid Token - user does not exist on the DB'
            });
        }

        // verify if the uid has status: true
        if (!user.status) {
            return res.status(401).json({
                message: 'Invalid Token - user with status: false'
            });
        }
        req.userData = { userId: uid };
        next();

    } catch (err) {
        res.status(401).json({
            message: 'Invalid token. You are not authenticated!'
        });
    }

};

module.exports = {
    validateJWT
};