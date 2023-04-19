const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes/route")

const app = express();
app.use(express.json())
const port = 3000;

// Connection mongodb database
mongoose.connect('mongodb+srv://nitukumari:Kashyapnitu8271@cluster0.5uwtnyo.mongodb.net/importcsv',
{useNewUrLParser:true})
.then(()=>console.log("mongodb is connected"))
.catch((error)=>console.log(error.message))

app.use("/",routes)
// Start the server
app.listen(port, function() {
    console.log("Server started on port " + port);
});
