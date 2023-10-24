require('dotenv').config()

const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

const config = require('./src/config/config')

// routes
const routeIndex = require('./src/routes/index.route')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(config.dbPath, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.use('/', routeIndex)

app.listen(process.env.PORT || 3000, () => console.log(`Server is on-line at port: ${process.env.PORT || 3000}`))