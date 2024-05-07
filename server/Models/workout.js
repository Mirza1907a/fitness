const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    exercisename : String,
    sets : String,
    reps: String,
    weight : String,
    notes : String,
    workout : String
})

const workoutdata =  mongoose.model("workout",workoutSchema)

module.exports =workoutdata


