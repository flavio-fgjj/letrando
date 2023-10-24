require('dotenv').config()

const axios = require('axios')

// getting words from webscraping
const job = async () => {
  try {
    return await axios.post(`${process.env.ENDPOINT}`)
  } catch (error) {
    console.error(error.config.url)
    return { "status": "NOK", "output": "Error to save words from service!"}
  }
}

// updating the seven words for the next day
const saveForNextDay = async () => {
  try {
    return await axios.get(`${process.env.ENDPOINT}`)
  } catch (error) {
    console.error(error.config.url)
    return { "status": "NOK", "output": "Error to save for next day!"}
  }
}

// check if the last service (saveForNextDay) executed, updated less then seven words. If yes, it will complete!
const fixForNextDay = async () => {
  try {
    return await axios.get(`${process.env.ENDPOINT}/fix`)
  } catch (error) {
    console.error(error.config.url)
    return { "status": "NOK", "output": "Error to fix for next day!"}
  }
}

module.exports = { job, saveForNextDay, fixForNextDay }