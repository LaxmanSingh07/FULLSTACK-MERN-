//import mongoose 

const mongoose = require('mongoose');


//route handler 

const LikeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, // This is the type of the object id
        ref:'Post', // This is the model we are referring to
    },
 
    user:{
        type:String,//This is the model we are referring to
        required:true,
    }


});

module.exports=mongoose.model('Like',LikeSchema);