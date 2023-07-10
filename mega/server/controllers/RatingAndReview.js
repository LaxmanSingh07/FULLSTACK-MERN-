const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

//create Rating

exports.createRating = async (req, res) => {
  try {
    // fetch the data from the request body
    const userId = req.user._id;
    const { courseId, rating, review } = req.body;
    // validate the data

    // if the user is enrolled in the course
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentEnrolled: { $elemMatch: { $eq: userId } },
    });

    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: "You are not enrolled in this course",
      });
    }

    // user has already rated the course
    const ratingDetails = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });

    if (ratingDetails) {
      return res.status(400).json({
        success: false,
        message: "You have already rated this course",
      });
    }

    // create the rating

    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });

    // update the course rating

    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: { ratingAndReviews: ratingReview._id },
      },
      { new: true }
    );

    console.log(updatedCourseDetails);

    // return the response
    res.status(200).json({
      success: true,
      message: "Rating and review added successfully",
      ratingReview,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//getAverage Rating (Aggrigation)

exports.getAverageRating = async (req, res) => {
  try {
    //1. get CourseId
    const { courseId } = req.body.courseId;
    //2. calculate the average rating  with the help of the aggregation
    const result = await RatingAndReview.aggregate([
      {
        $match: {
          course: new mongoose.Types.objectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
        },
      },
    ]);

    //return rating

    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }

    //if no rating/review exist

    return res.status(200).json({
      success: true,
      message: "Average Rating is 0, no ratings given till now",
      averageRating: 0,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// getAllRating

exports.getAllRatingReview = async (req, res) => {
  try {
    const allReviews = await RatingAndReview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();

    res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      allReviews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
