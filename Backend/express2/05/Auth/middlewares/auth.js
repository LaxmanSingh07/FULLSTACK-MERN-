// Three middlewares:

// auth: checks if the user is logged in or not
// isUser: checks if the user is logged in and is a user
// isAdmin: checks if the user is logged in and is an admin
// isVisitor: checks if the user is logged in and is a visitor

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    //get token from the body
    //although it is not a good practice to send token in body
    //but for simplicity we are sending token in body
    //you can send token in header as well

    // console.log("cookies", req.cookies.token);
    // console.log("body", req.body.token);
    // console.log("headers", req.headers("Authorization"));

    // const token=req.cookies.token||req.body.token||req.headers("Authorization").replace("Bearer ","");
    const token=req.headers("Authorization").replace("Bearer ","");
    console.log("token", token)
    // check if token exists

    if (!token||token==="") {
      return res.status(401).json({
        // 401 unauthorized
        success: false,
        message: "Token not found",
      });
    }

    // verify token

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify takes 2 arguments: token and secret key
      // IT WILL RETURN PAYLOAD IF TOKEN IS VALID
      console.log(decoded);

      req.user = decoded; // adding user to request object so that we can use it in next middleware or controller
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        // 401 unauthorized
        success: false,
        message: "Invalid token",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      // 500 internal server error
      success: false,
      message: "Something went wrong",
    });
  }
};


// FOR AUTHERIZATION OF USER AND ADMIN

exports.isUser = (req, res, next) => {
  try {
    if (req.user.role !== "user") {
      return res.status(401).json({
        // 401 unauthorized
        success: false,
        message: "This is protected from user",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      // 500 internal server error
      success: false,
      message: "Something went wrong",
    });
  }
};


exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
        return res.status(401).json({
            // 401 unauthorized
            success: false,
            message: "This is protected from admin",
        });
        } else {
        next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        // 500 internal server error
        success: false,
        message: "Something went wrong",
        });
    }
    }

