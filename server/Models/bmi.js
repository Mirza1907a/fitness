const mongoose = require('mongoose');

const bmiSchema = mongoose.Schema({
    name : String,
    height : String,
    weight : String
   
})

const bmidata =  mongoose.model("bmis",bmiSchema)

module.exports =bmidata


