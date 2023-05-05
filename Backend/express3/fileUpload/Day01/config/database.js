const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(()=>{
        console.log("Database connected successfully");
    })

    .catch(function (error) {
        console.log("Database connection failed");
        console.log(error);
        process.exit(0);
    })

}