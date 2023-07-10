//resetPasswordToken

const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.resetPasswordToken = async (req, res) => {
  try {
    //1. get user and password from the req.body
    const email = req.body.email;
    //2. check if user exists with this email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    //3. generate reset token
    const token = crypto.randomUUID(); // this function is used to generate random token
    const resetToken = crypto.createHash("sha256").update(token).digest("hex"); // this function is used to generate hash of the token
    //4. save the reset token and expiry date in the database
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3 * 60 * 1000; // this will set the expiry date to 10 minutes from now
    await user.save({ validateBeforeSave: false });

    //5. send email to the user with the reset token
    //6. send response to the user

    const url = `${req.protocol}://${req.get(
      "host"
    )}/resetPassword/${resetToken}`;

    // console.log(url);
    //send email to the user
    await mailSender(
      email,
      "Reset Password",
      `Please click on the link to reset your password: ${url}`,
    );

    res.status(200).json({
      success: true,
      message: "Email sent Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to send email",
    });
  }
};

//reset password

exports.resetPassword = async (req, res) => {
  try {
    //1. get token from req.params and password from req.body
    const { password, confirmPassword, token } = req.body; // we can access the token from the body as well becuase we are sending the token in the body from the frontend
    //2. check if user exists with this token and token is not expired
    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password and Confirm Password are not same",
      });
    }
    //2.1 get user with this token
    const useDetails = await User.findOne({ resetPasswordToken: token });
    if (!useDetails) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    //2.2 check if token is expired

    if (useDetails.resetPasswordExpires < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "Token expired, Please try again",
      });
    }

    //3. hash the new password

    const hashedPassword = await bcrypt.hash(password, 10);

    //4. update the password in db

    useDetails.password = hashedPassword;
    useDetails.resetPasswordToken = undefined;
    useDetails.resetPasswordExpires = undefined;
    await useDetails.save({ validateBeforeSave: false });

    //5. send response to the user

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Unable to change password",
    });
  }
};
