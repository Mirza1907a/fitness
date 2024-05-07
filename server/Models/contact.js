const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name : String,
    email : String,
    subject: String,
    message : String
})

const contactdata =  mongoose.model("contact",contactSchema)

module.exports =contactdata


