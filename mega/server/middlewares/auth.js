const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// isAuth

exports.auth = async (req, res, next) => {
  try {
    //1. get token from req.headers
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorisation").replace("Bearer ", "");
    //2. if token doesn't exist return error
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorised" });
    }
    //3. verify the token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = decoded;
    } catch (err) {
        //verification - error
      console.error(err);
      return res
        .status(401)
        .json({ success: false, message: "Unauthorised, Invalid token" });
    }
    next();
  } catch {
    //auth - error
    console.error(err);
    res.status(401).json({ success: false, message: "Something went wrong while validating the token" });
  }
};

// isStudent

exports.isStudent = async (req, res, next) => {
    try {
        if(req.user.accountType!=="student")
        {
           return res.status(401).json({
            success: false,
            message:"This is protected route for the students only"
           }) 
        }
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message:"User Role can't be verified"            
        })
    }

}

// isAdmin

exports.isAdmin = async (req, res, next) => {
    try {
        if(req.user.accountType!=="admin")
        {
           return res.status(401).json({
            success: false,
            message:"This is protected route for the Admin only"
           }) 
        }

    }
    catch(err) {

        return res.status(500).json({
            success: false,
            message:"Admin Role can't be verified"            
        })
    }

}
