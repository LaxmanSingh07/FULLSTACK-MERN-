const express=require("express");
const router=express.Router();


const {localFileUpload}=require("../controllers/fileUpload");


//post request for local file upload

router.post("/localFileUpload",localFileUpload);

module.exports=router;
