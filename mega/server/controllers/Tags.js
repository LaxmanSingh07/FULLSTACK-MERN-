const Tag = require("../models/Tags");
const Course = require("../models/Course");
const User = require("../models/User");
const CourseProgress = require("../models/CourseProgress");
const Profile = require("../models/Profile");

//createTag

exports.createTag = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Please enter all the fields",
      });
    }
    //create entry in the database

    const tag = await Tag.create({
      name,
      description,
    });

    console.log(tag);

    return res.status(200).json({
      success: true,
      message: "Tag created successfully",
      data: tag,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create tag",
    });
  }
};

// get all tags

exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find({}, { name: true, description: true });
    return res.status(200).json({
      success: true,
      message: "All tags fetched successfully",
      data: tags,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to get tags",
    });
  }
};
