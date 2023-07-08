const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSubSection = async (req, res) => {
  try {
    //1. data fetch
    const { title, timeDuration, description, sectionId } = req.body;
    const video = req.files.videoFile;
    //2. data validation
    if (!title || !timeDuration || !description || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }

    // 3. upload video to cloudinary

    const uploadDetails = await uploadImageToCloudinay(
      video,
      process.env.CLOUDINARY_FOLDER_NAME
    );

    //4. create subSection
    const newSubSection = await SubSection.create({
      title,
      timeDuration,
      description,
      videoUrl: uploadDetails.secure_url,
    });
    //4. update section with subSection ObjectId
    const updatedSectionDetails = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $push: {
          //we have to use the populate method to get the subSection details
          subSection: newSubSection._id,
        },
      },
      { new: true }
    ).populate("sectionContent");
    //5. return Response
    return res.status(200).json({
      success: true,
      message: "SubSection Created Successfully",
      data: updatedSectionDetails,
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

// update subSection

exports.updateSubSection = async (req, res) => {
  try {
    // 1. data fetch
    const { title, timeDuration, description, subSectionId } = req.body;
    const video = req.files.videoFile;
    // 2. data validation
    if (!title || !timeDuration || !description || !subSectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }

    // 3. upload video to cloudinary

    const uploadDetails = await uploadImageToCloudinay(
      video,
      process.env.CLOUDINARY_FOLDER_NAME
    );

    // 4. update subSection
    const updatedSubSection = await SubSection.findByIdAndUpdate(
      subSectionId,
      {
        title,
        timeDuration,
        description,
        videoUrl: uploadDetails.secure_url,
      },
      { new: true }
    );
    // 5. return Response
    return res.status(200).json({
      success: true,
      message: "SubSection Updated Successfully",
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

// delete subSection

exports.deleteSubSection = async (req, res) => {
  try {
    // 1. data fetch
    const { subSectionId } = req.body;
    // 2. data validation
    if (!subSectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    // 3. delete subSection
    await SubSection.findByIdAndDelete(subSectionId);
    // 4. return Response
    return res.status(200).json({
      success: true,
      message: "SubSection Deleted Successfully",
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
