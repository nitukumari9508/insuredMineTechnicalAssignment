const express= require("express")
const user = express()
const multer = require("multer")

const path = require("path")
const bodyparser= require("body-parser")
const userController = require("../controller/userController")
const userAccountController = require("../controller/accountController")
const agentController = require("../controller/agentController")
const policyController = require("../controller/policyController")
user.use(bodyparser.urlencoded({extende:true}))
// make folder make a static
user.use(express.static(path.resolve(__dirname,'public')))

 // file store with the help of multer package
  var storage=multer.diskStorage({
    destination:function(req,file,cb){
cb(null,"./public/uploads")
    },
    filename:function(req,file,cb){
cb(null, file.originalname)
    }
 })

 var uploads = multer({storage:storage})
 user.post("/user",uploads.single('file'),userController.importUser)
 
 user.post("/account",uploads.single('file'),userAccountController.importAccount)
 user.post("/agent",uploads.single('file'),agentController.importAgent)
 user.post("/policy",uploads.single('file'),policyController.importPolicy)

 module.exports = user;