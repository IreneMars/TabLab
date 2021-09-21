const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async(role = '') => {

    const roleExists = await Role.findOne({ role });
    if (!roleExists) {
        throw new Error(`The role: ${ role } is not contemplated in the BD.`);
    }
};

const emailExists = async(email = '') => {

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error(`The email: ${ email }, is already registered.`);
    }
};

const userExistsById = async(id) => {

    const userExists = await User.findById(id);
    if (!userExists) {
        throw new Error(`The id: ${ id } does not exist.`);
    }
};

module.exports = {
    isValidRole,
    emailExists,
    userExistsById
};