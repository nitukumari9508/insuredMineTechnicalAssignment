
const policyModel = require("../model/policyModel")


const csv = require("csvtojson")
const importPolicy = async function (req, res) {
    try {
        var policyData = []
        await csv()
            .fromFile(req.file.path)
            .then(async (response) => {
                for (let i = 0; i < response.length; i++) {
                    policyData.push({

                        policyNumber  : response[i].policy_number,
                  policyType  : response[i].policy_type,
                      premiumAmount  : response[i].premium_amount,
                   policyStartDate : response[i].policy_start_date,
                    policyEndDate:response[i].policy_end_date,
                       

                    })

                }
            })
        const policyDetail = await policyModel.insertMany(policyData)
        console.log(policyDetail)
        // Read records
        const readRecords = await policyModel.find()

        // Update records
        const updatedRecord = await policyModel.findOneAndUpdate(
            { policyNumber: '123' }, // Find record based on policy number
            { policyType: 'New Policy Type' }, // Update policy type
            { new: true } // Return the modified document instead of the original
        )

        // Delete records
        const deletedRecord = await policyModel.deleteOne({
            policyNumber: '456',
        })

        res.send({
            status: 200,
            success: true,
            message: "File uploaded successfully",
            data: {
                policyDetail,
                readRecords,
                updatedRecord,
                deletedRecord
            }
        })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}

module.exports = { importPolicy }



