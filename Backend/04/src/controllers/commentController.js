//import model 

const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

//business logic

exports.createComment =async(req,res)=>{
    try
    {
        //fetch data from req body 

        const {post,user,body}=req.body;
        //create a comment  object 
        const comment =new Comment(
            {
                post,user,body
            });

            const savedComment=await comment.save();
            //find the post by Id, add the new comment 

            const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}) //here push is a mongoDB operator
            .populate("comments") // This will populate the comments array with the actual comment objects
            .exec(); // This will execute the query
            console.log(updatedPost);
            //new:true is used to return the updated post
            //send the updated post as response

            res.json({
                post:updatedPost,
            })




             
    }
    catch(error)
    {
        return res.status(500).json({ //500 is server error
            error:"Server Error",
        })
    }
}