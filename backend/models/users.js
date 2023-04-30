const mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true 
    },
    password:{
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model("User", userSchema);
module.exports = User;