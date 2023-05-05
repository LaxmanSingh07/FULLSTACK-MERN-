const express=require('express')
//import routes for Todo Api
const todoRoutes=require('./routes/todos');
//db
const dbConnect=require('./config/database');
const app=express();

// load config file

require('dotenv').config();

const PORT=process.env.PORT || 3000;

//middleware to parse the request body

app.use(express.json()); //to parse the request body

//mount the todo Api routes

app.use('/api/v1',todoRoutes);


//start server 

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

//connect to database
dbConnect();


//defautl route

app.get('/',(req,res)=>{
    res.send('<h1>Hello from express</h1>');
}
)


