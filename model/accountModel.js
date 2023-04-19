const mongoose = require("mongoose")


const accountSchema = new mongoose.Schema({
    accountType: { type: String },
    account_name:{ type:String}

});
 module.exports = mongoose.model("accout", accountSchema)