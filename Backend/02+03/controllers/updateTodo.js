const Todo=require('../models/todo');

//define the route handler

exports.updateTodo=async (req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;
        // console.log(title,description,id);
        const todo=await Todo.findByIdAndUpdate({_id:id}
            ,{title,description,updateAt:Date.now()});

       res.status(200).json({

        success:true,
        data:todo,
        message:"Todo updated successfully"
        })

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Unable to update todo"
        })
    }

}