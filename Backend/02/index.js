const express=require('express')
//import routes for Todo Api
const todoRoutes=require('./routes/todo');
const app=express();

// load config file

require('dotenv').config();

const PORT=process.env.PORT || 5000;

//middleware to parse the request body

app.use(express.json());
