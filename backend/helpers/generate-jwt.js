const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        // jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
        //   process.env.JWT_KEY, { expiresIn: "4h" }
        // );

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('The token could not be generated.');
            } else {
                resolve(token);
            }
        });
    });
};

module.exports = {
    generateJWT
};