const mongoose = require("mongoose");

const jwt = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('jwtdat', jwt);