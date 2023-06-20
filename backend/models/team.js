// import mongoosoe module
const mongoose = require("mongoose");
// creation team schema
const teamSchema = mongoose.Schema({
    teamName: String,
    teamStadium: String,
    teamOwner: String
    
})
// creation name de model "Match"
const team = mongoose.model("Team", teamSchema);
// make team exportable
module.exports = team;

