const userModel = require("../model/userModel")

const csv = require("csvtojson")
const importUser = async function(req,res){
    try{
        var userData =[]
       await csv()
        .fromFile(req.file.path)
        .then(async(response)=>{
            for(let i=0;i<response.length;i++){
                userData.push({
                    firstname: response[i].firstname,
    email:response[i].email,
    dob :response[i].dob,
    address:response[i].address,
    phone: response[i].phone
                })
                //console.log(userData)
            }
        })
       const userDetails = await userModel.insertMany(userData)
       console.log(userDetails)
       // Read records
        const readData = await userModel.find({ email: { $regex: /gmail.com$/i } })
        console.log(readData)

        // Update records
        const updatedData = await userModel.updateMany({ email: { $regex: /yahoo.com$/i } }, { $set: { dob: '1990-01-01' } })
        console.log(updatedData)

        // Delete records
        const deletedData = await userModel.deleteMany({ phone: { $regex: /^02/ } })
        console.log(deletedData)


res.send({status:200,success:true, messagw:" file upload successfully", date:{userDetails,readData,updatedData,deletedData}})
    }catch(error){
res.send({status:500, success:false , message:error.message})
    }
}
module.exports = {importUser}