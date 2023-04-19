
const agentModel = require("../model/agentModel")


const csv = require("csvtojson")
const importAgent = async function (req, res) {
    try {
        var agentData = []
        await csv()
            .fromFile(req.file.path)
            .then(async (response) => {
                for (let i = 0; i < response.length; i++) {
                    agentData.push({

                        AgentName: response[i].ageent,
                        AgentType: response[i].userType,
                        AgentAddress: response[i].address,
                        City: response[i].city,
                        State:response[i].state,
                        Zip: response[i].zip,
                        Phone: response[i].phone,
                        Email: response[i].email,
                        

                    })

                }
            })
        const agentDetail = await agentModel.insertMany(agentData)
        console.log(agentDetail)
        const readRecords = await agentModel.find();

        // Update records
        const updatedRecord = await agentModel.findOneAndUpdate(
            { agentName: 'nitu' },
        
            { new: true }
        );

        // Delete records
        const deletedRecord = await agentModel.deleteOne({
            agentName: 'nitu',
        });


        res.send({
            status: 200, success: true, message: " file upload successfully", data: {
                agentDetail,
                readRecords,
                updatedRecord, deletedRecord
            }
        })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}
module.exports = { importAgent }