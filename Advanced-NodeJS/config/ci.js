require('dotenv').config()

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGOURI,
  cookieKey: process.env.COOKIE_KEY,
  redisUrl: process.env.REDIS_URL,
  };