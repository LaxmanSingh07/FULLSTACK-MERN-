const mongoose = require('mongoose');
require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    //newUrlParser: to avoid deprecation warning
    //useUnifiedTopology: to avoid deprecation warning

    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB", err);
        console.log(err);
        process.exit(0);
    });

}
