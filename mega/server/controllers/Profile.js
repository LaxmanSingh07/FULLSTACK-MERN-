const Profile = require("../models/Profile");
const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {
    //1. get the data from the request body
    const { dateOfBirth = "", about = "", contactNumber, gender } = req.body;
    //2. validate the data
    const userId = req.user._id;
    if (!contactNumber || !gender || !id) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //3. find the profile details
    const userDetails = await User.findById(userId);
    const profileId = userDetails.additionalDetails;
    const profileDetails = await Profile.findById(profileId);

    //4. update the profile details
    profileDetails.dateOfBirth = dateOfBirth;
    profileDetails.about = about;
    profileDetails.contactNumber = contactNumber;
    profileDetails.gender = gender;
    profileDetails.contactNumber = contactNumber;

    //5. save the profile details
    await profileDetails.save();

    //6. return the response

    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      data: profileDetails,
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

// delete Account

exports.deleteAccount = async (req, res) => {
  try {
    //1. get the user id
    const userId = req.user._id;

    //2. get the user details

    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // 3. delete the user details

    await Profile.findByIdAndDelete(userDetails.additionalDetails);

    //we want that the no of students should be decreased by 1

    // 4. delete the user

    await User.findByIdAndDelete(userId);

    //5. return the response
    return res.status(200).json({
      success: true,
      message: "Account deleted successfully",
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

// get profile details

exports.getProfileDetails = async (req, res) => {
  try {
    // 1. get the user id
    const userId = req.user._id;
    //2. Validate the user
    const userDetails = await User.findById(userId)
      .populate("additionalDetails")
      .exec();
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    //3. return the response
    return res.status(200).json({
      success: true,
      message: "Profile details fetched successfully",
      data: userDetails.additionalDetails,
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
