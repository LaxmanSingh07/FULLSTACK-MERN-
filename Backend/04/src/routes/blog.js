const express = require('express');
const router = express.Router();
const {likePost,unlikePost} = require('../controllers/likeController'); // Importing the controller

const {createComment} = require('../controllers/commentController');
const {createPost,getAllPosts} = require('../controllers/postController');

//Imprting the controller


//mapping created 

// router.get("/dummyroute",dummyLink);

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);



//exports 

module.exports=router;