//import mongoose 

const mongoose = require('mongoose');


//route handler 

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, // This is the type of the object id
        ref:'Post', // This is the model we are referring to
    },
    user:{
        type:String,//This is the model we are referring to
        required:true,
    },
    body:{
        type:String,
        required:true,
    }


});

module.exports=mongoose.model('Comment',commentSchema);