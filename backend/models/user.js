// import mongoosoe module
const mongoose = require("mongoose");
// creation matcha schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    avatar:String
})
// creation name de model "Match"
const user = mongoose.model("User", userSchema);
// make match exportable
module.exports = user;

