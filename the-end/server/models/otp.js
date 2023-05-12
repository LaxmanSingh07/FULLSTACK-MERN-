const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});



async function sendVerificationEmail(email, otp) {

    try {
        const mailResponse =await mailSender(email,"Verfication Email",`Your OTP is ${otp}`);
        console.log("mail response: ",mailResponse);
    }
    catch (err) {
        console.log("error occured while sending mails: ",err);
        throw err;
    }

}

//pre middleware 

OtpSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email,this.otp);
    next(); // call the next middleware

})


module.exports = mongoose.model("OTP", OtpSchema);
