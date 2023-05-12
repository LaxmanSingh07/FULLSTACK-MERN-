//sendOtp
const User = require("../models/User");
const OTP = require("../models/otp");
const otpGenerator = require("otp-generator");

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


