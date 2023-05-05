const express =require("express");
require("./config/database").connect(); // connect to database
require('dotenv').config();
const cokkieParser=require("cookie-parser");
const user=require("./routes/user");
const app=express();

const PORT=process.env.PORT || 3001;
app.use(express.json()); // for parsing application/json
app.use(cokkieParser());
app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});
