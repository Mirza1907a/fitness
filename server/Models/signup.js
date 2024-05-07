const mongoose = require('mongoose');

const fitnessSchema = mongoose.Schema({
    name : String,
    email : String,
    pass : String,
    file : String,
    role: {
        default : "users",
        type: String
    }
})

const userdata =  mongoose.model("users",fitnessSchema)

module.exports =userdata




