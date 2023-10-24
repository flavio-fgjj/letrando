const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const wordRoute = require('./routes/word.route')

app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))  // only sample data
app.use(bodyParser.json()) // json from body

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
      'Access-Control-Allow-Header',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).send({})
  }
  next()
})

app.use('/api/validate-word', wordRoute)

app.use((req, res, next) => {
  const erro = new Error('Not found')
  erro.status = 404
  next(erro)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.send({
      erro: {
          mensagem: error.message
      }
  })
})

module.exports = app