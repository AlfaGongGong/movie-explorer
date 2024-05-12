require('dotenv').config()

const config = {
  apiKey: process.env.API_KEY,
  Authorization: proccess.env.AUTH,
  Host: process.env.HOST,
  Accept: process.env.ACCEPT,
}

module.exports = config
