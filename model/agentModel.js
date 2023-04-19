
 const mongoose = require("mongoose")
const agentSchema = new mongoose.Schema({
    
    AgentName: String,
    AgentType: String,
    AgentAddress: String,
    City: String,
    State: String,
    Zip:String,
    Phone: String,
    Email: String,
    
  });
  
  module.exports = mongoose.model('Agent', agentSchema);
  