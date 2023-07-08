const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    // 1. data fetch
    const { sectionName, courseId } = req.body;
    // 2. data validation
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    // 3. create Section

    const newSection = await Section.create({
      sectionName,
    });
    // 4. update course with section ObjectId
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          //we have to use the populate method to get the section details
          courseContent: newSection._id,
        }.populate("courseContent"),
      },
      { new: true }
    );
    // return Response
    return res.status(200).json({
      success: true,
      message: "Section Created Successfully",
      data: updatedCourseDetails,
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
    const { sectionId } = req.body||req.params;
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
