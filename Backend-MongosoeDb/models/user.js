const mongoose = require("mongoose");


//Schema
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
    },
   
    username: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },

},
{timestamps:true}
);

//Model
const User = mongoose.model("user", userSchema)

module.exports = User;