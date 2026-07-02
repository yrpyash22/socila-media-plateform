const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

<<<<<<< HEAD
const dbUrl = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/socialmedia';
=======
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/socialmedia';
>>>>>>> 2aa250d5bb470c71f3a4a3ca912227c004eea4d7

mongoose.connect(dbUrl)
  .then((conn) => {
    console.log(`Connected Success to Yashraj's LOCAL Database: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.log(`❌ Database Connection Failed! Error: ${err.message}`);
  });

module.exports = mongoose;