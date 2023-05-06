const express = require("express");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
const db = require("./config/database");
const cloudinary = require("./config/cloudinary");
const fileUpload = require("./routes/fileUpload");
//app initialization
const app = express();
// config files
require("dotenv").config();
// port finding
const PORT = process.env.PORT || 5000;

// add middlewares

app.use(express.json());
app.use(fileupload(
  {
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }
)); // you can use the flag inside the fileupload() to enable/disable the file upload

// db connection

db.connect();

// cloud connection

cloudinary.cloudinaryConnect();

// routes mounting

app.use("/api/v1/upload", fileUpload);

//fetch image
//validate image


// server listening

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
