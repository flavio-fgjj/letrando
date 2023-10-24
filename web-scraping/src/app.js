const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// inicializa as rotas
const indexRoute = require('./routes/index-route')
const wordRoute = require('./routes/word-route')
const randonWordRoute = require('./routes/randon-word-route')

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(bodyParser.json({
  limit: '5mb'
}))

// habilitando o cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.use('/', indexRoute)
app.use('/api/word', wordRoute)
app.use('/api/randon-word', randonWordRoute)

module.exports = app