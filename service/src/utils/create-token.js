const jwt = require('jsonwebtoken')
const config = require('../config/config')

const createToken = (id, username, email) => {
  return jwt.sign(
    { id, username, email }, 
    config.jwtSecret, 
    { expiresIn: config.jwtExpires }
  )
}

module.exports = createToken