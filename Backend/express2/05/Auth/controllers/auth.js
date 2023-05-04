// controller is a function that has access to the request and response object 

const bcrypt = require('bcrypt');
const user=require("../models/user");

// signup route controller

exports.signup=async(req,res)=>{
    try{
        // get user input 
        const {name,email,password,role}=req.body;
        
        // check if user already exist

        const existingUser=await user.findOne({email});

        if(existingUser){ // if user already exists then return 409 conflict
            return res.status(409).json({ // 409 conflict
                success:false,
                message:"User already exists",
                
            });
        }

        // hash password

        let hashPassword;
        try{
            
            hashPassword=await bcrypt.hash(password,10); // 10 is salt or number of rounds of hashing used to generate the hash 

        }
        catch(err){
            // you can use the retry strategy if failed to hash password
            return res.status(500).json({ // 500 internal server error
                success:false,
                message:"Error hashing password",
                err
            });
        }

        // create new user

        const newUser=new user({
            name,
            email,
            password:hashPassword,
            role
        });

        // save user


        return res.status(201).json({ // 201 created
            success:true,
            message:"User created successfully",
            data:newUser
        });







    }

    catch(error){
        console.log(error);
        return res.status(500).json({ // 500 internal server error
            success:false,
            message:"User can't be registered",
            error
        });
    }

}