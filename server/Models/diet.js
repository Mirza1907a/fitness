const mongoose = require('mongoose');

const dietSchema = mongoose.Schema({
    food : String,
    meal : String,
    nutrition: String

})

const dietdata =  mongoose.model("userdiets",dietSchema)

module.exports =dietdata


