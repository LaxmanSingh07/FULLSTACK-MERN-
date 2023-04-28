//import model

const Todo=require('../models/todo');

//define the route handler 

exports.deleteTodo=async (req,res)=>{
    try{
        // extract todo iteam by id from the database
        const id=req.params.id;

        const todo=await Todo.findByIdAndDelete({_id:id});
        
        //data not found

        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        

        res.json({
               success:true,
               message:"Todo deleted successfully",
               data:todo

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