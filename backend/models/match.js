// import mongoosoe module
const mongoose = require("mongoose");
// creation matcha schema
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
})
// creation name de model "Match"
const match = mongoose.model("Match", matchSchema);
// make match exportable
module.exports = match;

