const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    role:{
        type:String,
        enum:["admin","user","visitor"],
        default:"visitor"
    }

},{timestamps:true});

module.exports=mongoose.model("User",userSchema);