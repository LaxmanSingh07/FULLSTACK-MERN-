//import

const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //update the post collection bais on this

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    ) //here push is a mongoDB operator
      .populate("likes")
      .exec(); // This will populate the likes array with the actual like objects
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      //500 is server error
      error: "Error while liking post",
    });
  }
};

// unlike a post

//if we want to unlike a post we need to delete the like object from the like collection and also remove the like id from the likes array in the post collection
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //delete the like object from the like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like }); // the first post is the field name and the second post is the value of the field
    //remove the like id from the likes array in the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );
    res.json({ post: updatedPost });


  } catch (error) {
    return res.status(500).json({
      //500 is server error
      error: "Error while unliking post",
    });
  }
};
