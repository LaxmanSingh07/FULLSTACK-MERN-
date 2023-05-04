// controller is a function that has access to the request and response object

const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// signup route controller

exports.signup = async (req, res) => {
  try {
    // get user input
    const { name, email, password, role } = req.body;

    // check if user already exist

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // if user already exists then return 409 conflict
      return res.status(409).json({
        // 409 conflict
        success: false,
        message: "User already exists",
      });
    }

    // hash password

    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10); // 10 is salt or number of rounds of hashing used to generate the hash
    } catch (err) {
      // you can use the retry strategy if failed to hash password
      return res.status(500).json({
        // 500 internal server error
        success: false,
        message: "Error hashing password",
        err,
      });
    }

    // create new user

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
    });

    // save user

    await newUser.save();

    return res.status(201).json({
      // 201 created
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      // 500 internal server error
      success: false,
      message: "User can't be registered",
      error,
    });
  }
};

// login route controller

exports.login = async (req, res) => {
  try {
    //data fetch

    const { email, password } = req.body;
    //validation on email and password

    if (!email || !password) {
      return res.status(400).json({
        // 400 bad request
        success: false,
        message: "Missing email and/or password",
      });
    }

    //check if user exists

    let user =await User.findOne({ email });
    // console.log(user.email, user.password);

    //if user doesn't exist then return 401 unauthorized

    if (!user) {
      return res.status(401).json({
        // 401 unauthorized
        success: false,
        message: "User is not Registered",
      });
    }

    //if user exists then compare password and generate token

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    if (await bcrypt.compare(password, user.password)) {
      //password match

      //generate token

      //sign takes 3 arguments: payload, secret key, options


      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h", // token will expire in 1 hour 
      });

        //return token

        user=user.toObject;// to convert mongoose object to plain javascript object
        user.token = token;
        user.password=undefined; // to not send password in response



        //Cookie
        // It takes 3 arguments: name, value, options

        const options={
            expires: new Date(Date.now()+3*24*60*60*1000), // convert days to milliseconds
            httpOnly:true, // cookie can't be accessed by client side script
        }
        res.cookie("token",token,options).status(200).json({
            // 200 ok
            success: true,
            token,
            user,
            message: "User logged in successfully",
            data: user,
          });
    } 
    else {
      //if password doesn't match then return 403 forbidden

      return res.status(403).json({
        // 403 forbidden
        success: false,
        message: "Incorrect email or password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      // 500 internal server error
      success: false,
      message: "User can't be logged in",
      error,
    });
  }
};
