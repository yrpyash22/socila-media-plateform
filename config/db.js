const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbUrl = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/socialmedia';

mongoose.connect(dbUrl)
  .then((conn) => {
    console.log(`Connected Success to Yashraj's LOCAL Database: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.log(`❌ Database Connection Failed! Error: ${err.message}`);
  });

module.exports = mongoose;