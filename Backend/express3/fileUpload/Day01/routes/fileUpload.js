const express=require("express");
const router=express.Router();


const {localFileUpload,imageUpload,videoUpload,imageReduce}=require("../controllers/fileUpload");


//post request for local file upload

router.post("/localFileUpload",localFileUpload)
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/reduceImage",imageReduce);

module.exports=router;
