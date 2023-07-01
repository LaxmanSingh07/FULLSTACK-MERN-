const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

//sendOtp

exports.sendOtp = async (req, res) => {
  try {
    //1. get email from req.body
    const { email } = req.body;

    //check the email is following the email pattern or not

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    //2. check if user exists with this email
    const userPresent = await User.findOne({ email: email });

    if (userPresent) {
      // if user already exists return a response
      return res
        .status(401) // 401 means unauthorised
        .json({ error: "User already exists with this email" });
    }

    //3. generate otp

    let otp = otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
      alphabets: false,
    });
    console.log("otp generated: ", otp);

    //4. check if otp already exists in db to prevent duplicate otp

    const isOtpPre = await OIP.findOne({ otp: otp });

    // if otp already exists then generate new otp and check again if it exists in db

    while (isOtpPre) {
      //it is not a good practice to use while loop here
      otp = otpGenerator.generate(6, {
        upperCase: false,
        specialChars: false,
        alphabets: false,
      });
      console.log("otp generated: ", otp);
      isOtpPre = await OIP.findOne({ otp: otp });
    }

    //5. save otp in db

    const otpPayLoad = new OTP({
      email,
      otp,
    });

    //create an extry of Otp

    const otpEntry = await OTP.create(otpPayLoad);
    console.log(otpEntry);

    //retrun response

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      data: otpEntry,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Unable to send OTP",
    });
  }
};

//singup

// most recent otp must be matched with the otp in db

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    //validate the data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contactNumber ||
      !otp
    ) {
      return res.status(403).json({
        // 403 means forbidden
        success: false,
        message: "All fields are required",
      });
    }
    // password match

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password must be same",
      });
    }

    // check if user already exists with this email

    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // find most recent otp in db

    const recentOtp = await OTP.findOne({ email: email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("recent otp: ", recentOtp);

    //validate OTP

    if (recentOtp.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // compare the otp from req.body and otp from db
    else if (recentOtp.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    //hash the password

    const hashedPassword = await bcrypt.hash(password, 10);
    //save the user in db

    //creating a profile for the user

    const profile = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      contactNumber,
      additionalDetails: profile._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}+${lastName}&background=%230000ff&radius=50`,
    });

    // return response

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Unable to create user",
    });
  }
};
