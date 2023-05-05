//import mongoose 

const mongoose = require('mongoose');


//route handler

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId, // This is the type of the object id
        ref:'Like', // This is the model we are referring to
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId, // This is the type of the object id
        ref:'Comment', // This is the model we are referring to
    }],

});














// export 

module.exports=mongoose.model('Post',postSchema);