// import mongoosoe module
const mongoose = require("mongoose");
// creation player schema
const playerSchema = mongoose.Schema({
    age: Number,
   nbr : Number,
    name: String,
    position: String
})
// creation name de model "Match"
const player = mongoose.model("Player", playerSchema);
// make match exportable
module.exports = player;

