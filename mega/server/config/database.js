const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        userNewUrlParser:true,
        userUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB connect Successfully")
    })
    .catch(()=>{
        console.log("DB connection Failed");
        console.error(error);
        process.exit(1);
    })
}
