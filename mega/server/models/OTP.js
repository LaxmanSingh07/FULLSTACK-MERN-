const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

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

// a function -> to send the emails to the user
async function sendVerificationEmail(email, otp) {
  try {
    // email , title , body
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      emailTemplate(otp)
    );
    console.log("mail response: ", mailResponse.response);
  } catch (err) {
    console.log("error occured while sending mails: ", err);
    throw err;
  }
}

//pre middleware

// Define a post-save hook to send email after the document has been saved
OtpSchema.pre("save", async function (next) {
  console.log("New document saved to database");

  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

const OTP = mongoose.model("OTP", OtpSchema);

module.exports = OTP;
