// config/config.js
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'default_secret_key_123',
  mongoUri: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/socialmedia' // Local fallback link
};

module.exports = config;