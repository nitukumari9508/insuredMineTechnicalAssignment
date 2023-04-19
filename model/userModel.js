
const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
    firstname: { type: String },
    email: { type: String },
    dob : {type: Date},
    address: { type: String },
    phone: { type: String },
    
});



 module.exports = mongoose.model("user", userSchema)