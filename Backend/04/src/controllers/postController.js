const Post=require('../models/postModel');


exports.createPost=async(req,res)=>{
    try{

        //fetch data from req body
        const {title,body}=req.body;

        console.log(title,body)
        //create a post object
        const post =new Post({
            title,body
        });

        const savedPost=await post.save();
        res.json({
            post:savedPost,
        })

    }
    catch(error){
        return res.status(500).json({ //500 is server error
            error:"Error while creating post",
        })
    }
};

//need some more testing after compeleting the comment controller 

exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find({}).populate("comments").exec(); //populate is used to populate the comments array with the actual comment objects
        res.json({
            posts,
        })
    }

    catch(error){
        return res.status(500).json({ //500 is server error
            error:"Error while getting all posts",
        })
    }

};