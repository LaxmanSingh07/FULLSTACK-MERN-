const mongoose = require('mongoose');

require('dotenv').config()
const connectDB = async () => {
  mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err=>{
    console.log("Db facing some issue");
    console.log(err);
    process.exit(1); // Stop the process if db is not connected


  })
}

module.exports = connectDB;