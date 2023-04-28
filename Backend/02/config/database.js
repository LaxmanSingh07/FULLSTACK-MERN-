const mongoose=require('mongoose');

require('dotenv').config(); // this will allow us to use the .env file
const dbConnect=()=>{
    //how you are able to access the DATABASE_URL variable
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((err)=>{
        console.log("Issue in Db Connection"+err.message);
        process.exit(1); // this will exit the application
    })
}

module.exports=dbConnect;