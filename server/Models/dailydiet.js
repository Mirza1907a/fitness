const mongoose = require('mongoose');

const dailydietSchema = mongoose.Schema({
    dailyfood : String,
    description : String,
    time: String

})

const dietdata =  mongoose.model("ourdiets",dailydietSchema)

module.exports =dietdata


