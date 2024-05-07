const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    pack : String,
    branch : String,
    subject : String,
    message : String,

})

const memberdata =  mongoose.model("memberships",memberSchema)

module.exports =memberdata


