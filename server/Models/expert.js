const mongoose = require('mongoose');

const expertSchema = mongoose.Schema({
    name : String,
    details : String,
    profile : String

})

const expertdata =  mongoose.model("experts",expertSchema)

module.exports =expertdata


