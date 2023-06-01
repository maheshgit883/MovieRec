const mongoose = require("mongoose");

const DB = "mongodb+srv://Mahesh:mahesh883@cluster0.qmgfbdv.mongodb.net/MovieDB?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})