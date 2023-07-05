//resetPasswordToken 

const User=require("../models/User");
const mailSender=require("../utils/mailSender");

exports.resetPasswordToken=async(req,res)=>{
    //1. get user and password from the req.body
    //2. check if user exists with this email


    const url=`${req.protocol}://${req.get("host")}/resetPassword/${resetToken}`;

}