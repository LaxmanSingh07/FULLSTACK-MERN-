const express=require("express");
const router=express.Router();
const {login,signup}=require("../controllers/auth");
const {auth,isUser,isAdmin}=require("../middlewares/auth");

router.post("/login",login);
router.post("/signup",signup);

//testing routes

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to test route",
        data:req.user
    });
});

router.get("/user",auth,isUser,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome user",
        data:req.user
    });
}
);

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome admin",
        data:req.user
    });
});

router.get("/visitor",(req,res)=>{
    res.json({
        success:true,
        message:"Welcome visitor",
        data:req.user
    });
});

module.exports=router;