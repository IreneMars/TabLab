const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
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