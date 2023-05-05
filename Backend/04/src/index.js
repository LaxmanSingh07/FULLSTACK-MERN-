const blog=require('./routes/blog');
const connectDB = require('./config/database');
const express=require('express');
const app=express();
const dotenv=require("../.env")

require("dotenv").config();
const PORT=process.env.PORT || 5000;


//middleware

app.use(express.json()); // To parse the incoming requests with JSON payloads


//mount 
app.use('/api/v1',blog);
connectDB(); // Connect to database


app.get("/",(req,res)=>{
    res.send("Hello World");
})

//start the server

app.listen(3005,()=>{
    console.log("Server is running on port 3005");
})