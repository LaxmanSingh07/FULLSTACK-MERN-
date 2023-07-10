const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //? Cross Origin Resource Sharing
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

//database connect
database.connect();

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"], // enertainent the request from this origin
    credentials: true, //? allow the session cookie to be sent to and from the client
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// cloudinary connect

cloudinaryConnect();

// routes mount

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

//def route

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Welcome to the E-Learning API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
