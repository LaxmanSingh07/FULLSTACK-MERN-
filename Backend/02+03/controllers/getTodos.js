//import model

const Todo=require('../models/todo');

//define the route handler 

exports.getTodos=async (req,res)=>{
    try{
        //fetch all todos from the database
        const todos=await Todo.find({});
        
        //respond with the fetched todos
        return res.status(200).json({
            success:true,
            data:todos,
            message:"All todos fetched successfully"
        })
    }
    catch(err)
    {
       console.error(err);
       res.status(500).json({
              success:false,
                message:"Unable to fetch todos"
         })
    }
}

exports.getTodoById=async (req,res)=>{
    try{
        // extract todo iteam by id from the database
        const id=req.params.id;

        const todo=await Todo.findById({_id:id});
        
        //data not found

        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }

        //respond with the fetched todo

        return res.status(200).json({
            success:true,
            data:todo,
            message:"Todo fetched successfully"
        })
        
    }
    catch(err)
    {
       console.error(err);
       res.status(500).json({
              success:false,
                message:"Unable to fetch todo"
         })
    }
}