const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
// const Payment = require("../models/Payment");
// const mailSender = require("../config/mailSender");
const crypto = require("crypto");
const {
  courseEnrolledMail,
} = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");


//if user want to buy more than one course 

exports.capturePayment =async(req,res)=>{
  const {courses}=req.body;
  const userId=req.user.id;

  if(courses.length===0)
  {
    return res.json({success:false,message:"Please provide course id "})
  }
  let totalAmount=0;

  for(const course_id of courses)
  {
    let course;
    try
    {
      course=await Course.findById(course_id);
      if(!course)
      {
        return res.status(200).json({
          success:false,
          message:"Could not find the course"
        })
      }
      const uid=new mongoose.Types.ObjectId(userId);
      if(course.studentEnrolled.includes(uid))
      {
        return res.status(200).json({
          success:false,
          message:"Student is already enrolled in the course"
        })
      }
      totalAmount+=course.price;
    }
    catch(error)
    {
      console.log(error);
      return res.status(500).json({
        success:false,
        message:error.message
      })
    }
  }

  const options={
    amount:totalAmount*100,
    currency:"INR",
    receipt:Math.random(Date.now().toString())
  }
  try
  {
    const paymentResponse=await instance.orders.create(options);
    res.json({
      success:true,
      message:paymentResponse,
    })
  }
  catch(error)
  {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"Could not intiate order"
    })
  }
}

// //captue the payment and initiate the course enrollment

// exports.capturePayment = async (req, res) => {
//   //1. get course id and user id from req.body
//   const { courseId } = req.body;
//   const userId = req.user._id;
//   //2. validate the course id and user id
//   if (!courseId || !userId) {
//     return res.status(400).json({ error: "Course id is required" });
//   }

//   //validate the course id

//   let course;
//   try {
//     course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(400).json({ error: "Invalid course id" });
//     }

//     //user already pay for the same course

//     const uid = new mongoose.Types.ObjectId(userId); // convert string to object id
//     if (course.studentEnrolled.includes(uid)) {
//       return res.status(200).json({
//         success: false,
//         message: "You have already enrolled in this course",
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }

//   //order create

//   const amount = course.price;
//   const currency = "INR";
//   const options = {
//     amount: amount * 100, // to convert in paise
//     currency,
//     receipt: Math.random(Date.now()).toString(),
//     notes: {
//       courseId: courseId,
//       userId,
//     },
//   };

//   try {
//     //instance is the object of razorpay
//     const paymentResponse = await instance.orders.create(options);
//     console.log(paymentResponse);

//     //return response
//     return res.status(200).json({
//       success: true,
//       courseName: course.courseName,
//       courseDescription: course.courseDescription,
//       thumbnail: course.thumbnail,
//       orderId: paymentResponse.id,
//       currency: paymentResponse.currency,
//       amount: paymentResponse.amount,
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//       message: "Could not initiate order",
//     });
//   }
// };

// //verify the signature of Razorpay and Server

// exports.verifySignature = async (req, res) => {
//   // steps to verify the signature

//   const webhookSecret = "12345678";
//   const signature = req.headers["x-razorpay-signature"];

//   //Hmac is a cryptographic hash function
//   const shasum = crypto.createHmac("sha256", webhookSecret);
//   shasum.update(JSON.stringify(req.body));
//   const digest = shasum.digest("hex"); //hexadecimal format

//   //compare the signature

//   if (signature === digest) {
//     console.log("Payment is authorized");

//     // get the data

//     const { courseId, userId } = req.body.payload.payment.entity.notes;

//     try {
//       //update the course
//       const entrolledCourse = await Course.findOneAndUpdate(
//         { _id: courseId },
//         { $push: { studentEnrolled: userId } },
//         { new: true }
//       );

//       if (!entrolledCourse) {
//         return res.status(500).json({
//           success: false,
//           message: "Could not enroll in the course",
//         });
//       }

//       console.log(entrolledCourse);

//       //update the user

//       const entrolledStudent = await User.findOneAndUpdate(
//         { _id: userId },
//         { $push: { courses: courseId } },
//         { new: true }
//       );

//       console.log(entrolledStudent);

//       //send the mail confirmation

//       const emailResponse = await mailSender({
//         from: " ",
//         to: entrolledStudent.email,
//         subject: "Course Enrollment",
//         html: `<h1> You have successfully enrolled in ${entrolledCourse.courseName}</h1>`,
//       });

//       console.log(emailResponse);

//       //save the payment details

//       return res.status(200).json({
//         success: true,
//         message: "Payment is successful",
//       });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({
//         success: false,
//         message: "Could not enroll in the course",
//       });

//     }
//   }
//   else{
//     return res.status(400).json({
//       success: false,
//       message: "Payment is not authorized",
//     });
//   }
// };
