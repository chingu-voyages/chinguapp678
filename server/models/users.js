const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now(),
    }
});
module.exports = mongoose.model("Users", userSchema);