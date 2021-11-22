const { Schema, model } = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = Schema({
    username: {
        type: String,
        required: [true, 'The username is mandatory'],
        unique: [true, 'The username must be unique']
    },
    email: {
        type: String,
        required: [true, 'The email is mandatory'],
        unique: [true, 'The email must be unique']
    },
    password: {
        type: String,
        required: [true, 'The password is mandatory'],
    },
    photo: {
        type: String,
        required: [false],
    },
    name: {
        type: String,
        default: this.username
    },
    role: {
        type: String,
        required: true,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});

userSchema.pre('save', function(next) {
    this.name = this.username; // considering _id is input by client
    next();
});

userSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
};

userSchema.plugin(uniqueValidator);

module.exports = model('User', userSchema);