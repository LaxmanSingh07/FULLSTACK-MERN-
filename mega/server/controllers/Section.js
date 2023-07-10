const Section = require("../models/Section");
const Course = require("../models/Course");
// CREATE a new section
exports.createSection = async (req, res) => {
  try {
    // Extract the required properties from the request body
    const { sectionName, courseId } = req.body;

    // Validate the input
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing required properties",
      });
    }

    // Create a new section with the given name
    const newSection = await Section.create({ sectionName });

    // Add the new section to the course's content array
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    // Return the updated course object in the response
    res.status(200).json({
      success: true,
      message: "Section created successfully",
      updatedCourse,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// update section

exports.updateSection = async (req, res) => {
  try {
    // 1. data fetch
    const { sectionName, sectionId } = req.body;
    // 2. data validation
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    // 3. update Section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      {
        sectionName,
      },
      { new: true }
    );
    // return Response
    return res.status(200).json({
      success: true,
      message: "Section Updated Successfully",
      data: updatedSection,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

// delete section

exports.deleteSection = async (req, res) => {
  try {
    // 1. data fetch
    //assuming that id any one of the body or params
    const { sectionId } = req.body || req.params;
    // 2. data validation
    if (!sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    // 3. delete Section
    const deletedSection = await Section.findByIdAndDelete(sectionId);
    // Todo: do we need to delete the section from the course schema as well?

    // return Response
    return res.status(200).json({
      success: true,
      message: "Section Deleted Successfully",
      data: deletedSection,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};
