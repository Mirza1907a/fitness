const mongoose = require('mongoose');

const pricingSchema = mongoose.Schema({
    price : String,
    branch : String,
    message : String,
    pack : String,

})

const pricingdata =  mongoose.model("pricings",pricingSchema)

module.exports =pricingdata


