const userAccount = require("../model/accountModel")

const csv = require("csvtojson")
const importAccount = async function (req, res) {
    try {
        var userAccountData = []
        await csv()
            .fromFile(req.file.path)
            .then(async (response) => {
                for (let i = 0; i < response.length; i++) {
                    userAccountData.push({

                        account_name: response[i].account_name,
                        accountType: response[i].account_type,

                    })

                }
            })
        const accountDetails = await userAccount.insertMany(userAccountData)
        console.log(accountDetails)
        const readRecords = await userAccount.find();

        // Update records
        const updatedRecord = await userAccount.findOneAndUpdate(
            { account_name: 'John Doe' },
            { account_name: 'Jane Doe' },
            { new: true }
        );

        // Delete records
        const deletedRecord = await userAccount.deleteOne({
            _id: "64403f83df42be7bdf3af9e4",
        });


        res.send({
            status: 200, success: true, message: " file upload successfully", data: {
                accountDetails,
                readRecords,
                updatedRecord, deletedRecord
            }
        })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}
module.exports = { importAccount }