const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "student"
    },
})

const Users = mongoose.model('Users', userSchema);

module.exports.Users = Users