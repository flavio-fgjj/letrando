require('dotenv').config()

const axios = require('axios')

const getRandonWords = async  (word) => {
  try {
    return await axios.get(`${process.env.ENDPOINT}/api/word/${word}`)
  } catch (error) {
    //console.error(error.config.url)
    return { "status": "NOK", "output": "Web Scraping error!"}
  }
}

module.exports = getRandonWords