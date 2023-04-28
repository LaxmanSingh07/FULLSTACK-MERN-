//import model

const Todo=require('../models/todo');

//define the route handler 

exports.createTodo=async (req,res)=>{
    try{
        //extract title and description from req.body
        const {title,description}=req.body;

        console.log(title,description);
        //create a new todo object and insert it to the database

        const response=await Todo.create({
            title,
            description,
        })

        //send the response to the client

        return res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })

    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Unable to create entry"
        })
    }
}