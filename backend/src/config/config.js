require('dotenv').config()

const config = () => {
  return{
    jwtSecret:'cd68ffcd-d7cd-4d71-987d-75137dd6d252',
    jwtExpires:'2d',
    salt:10,
    dbPath: process.env.MONGO_CONNECTION_STRING
  }
}
module.exports = config()