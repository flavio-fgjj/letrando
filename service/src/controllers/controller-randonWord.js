const axios = require('axios')
require('dotenv').config()

const getRandonWords = async  (fs2) => {
  try {
    return await axios.get(`${process.env.ENDPOINT}/api/randon-word/?q1=10&q2=${fs2}`)
  } catch (error) {
    //console.error(error)
    return { "status": "NOK", "output": "Web Scraping error!"}
  }
}

module.exports = getRandonWords