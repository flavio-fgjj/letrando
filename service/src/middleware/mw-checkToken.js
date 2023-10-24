const { config } = require("dotenv")
const jwt = require("jsonwebtoken")

const check = (req, res, next) => {
  const token = req.headers.token
  if(!token) {
    return res
      .status(401)
      .send({
        output: 'Not authorized!'
      })
  }

  jwt.verify(token, config.jwtSecret,(err,result) => {
    if(erro) {
      return res
        .status(401)
        .send({
          output: `Invalid token! -> ${err}`
        })
    }

    next()
  })
}

module.exports = check;