const Course = require("../models/Course");
const Tag = require("../models/Tags");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//createCourse

exports.createCourse = async (req, res) => {
  try {
    //fetch the data from the request body

    const { courseName, courseDescription, whatYouWillLearn, price, tag } =
      req.body;
    const { thumbnail } = req.files.thumbnailImage;

    //validate the data

    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
      !thumbnail
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter all the fields",
      });
    }

    // check if the user is admin

    const userId = req.user._id;
    const instructorDetails = await User.findById(userId);

    console.log(instructorDetails);

    if (!instructorDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // check if the user is admin or not

    const tagDetails = await Tag.findById(tag);

    if (!tagDetails) {
      return res.status(400).json({
        success: false,
        message: "Tag not found",
      });
    }

    //upload the image to cloudinary

    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    // create an entry in the database

    const newCourse = await Course.create({
      courseName,
      courseDescription,
      instructor: instructorDetails._id,
      whatYouWillLearn,
      price,
      tag: tagDetails._id,
      thumbnailZ: thumbnailImage.secure_url,
    });

    //add the new course to the instructor's profile

    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      { $push: { courses: newCourse._id } },
      {
        new: true,
      }
    );

    //update the tag details

    await Tag.findByIdAndUpdate(
      { _id: tagDetails._id },
      { $push: { courses: newCourse._id } },
      {
        new: true,
      }
    );

    //return response

    return res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create course",
    });
  }
};

// get all courses

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find(
      {},
      {
        courseName: true,
        price: true,
        thumbnail: true,
        instructor: true,
        ratingAndReviews: true,
        studentEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();
    return res.status(200).json({
      success: true,
      message: "All courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Unable to get courses",
      error: error.message,
    });
  }
};
