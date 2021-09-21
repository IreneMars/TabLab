// module.exports = (req, res, next) => {
//   try {
//       const token = req.headers.authorization.split(" ")[1];
//       const decodedToken = jwt.verify(token, process.env.JWT_KEY);
//       req.userData = { email: decodedToken.email, userId: decodedToken.userId };
//       next();
//   } catch (error) {
//       res.status(401).json({ message: "You are not authenticated!" });
//   }
// };

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async(req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

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
        console.log(err);
        res.status(401).json({
            message: 'Invalid token. You are not authenticated!'
        });
    }

};

module.exports = {
    validateJWT
};