const mongoose = require("mongoose")
const policySchema = new mongoose.Schema({
    policyNumber: { type: String },
    policyType: { type: String },
    premiumAmount: { type: Number },
    userId: { type: String },
    policyStartDate:{ type: Date},
    policyEndDate:{ type: Date}
});
  module.exports = mongoose.model("policy", policySchema)


/* Create API to upload the attached XLSX/CSV data into MongoDB.
2) CRUD operation for User, Account, and Policy
3) Consider each info as a different collection in MongoDB (Agent, User, User's Account, LOB, Carrier, Policy).
*/