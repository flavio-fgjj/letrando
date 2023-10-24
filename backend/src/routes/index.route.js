const express = require('express')

const Model = require('../model/Word.model')

const route = express.Router()

route.get('/', async (req, res) => {
  let now = new Date()
  now.setDate(now.getDate())

  Model
    .find({ game_date: `${now.getDate().toString().padStart(2, '0')}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getFullYear().toString().padStart(4, '0')}` })
    .exec((err, result) => {
      if (err) {
        return result
          .status(500)
          .send({
            output: `Err -> ${err}`
          })
      }

      return res.status(200).send({
        output: 'OK',
        payload: result
      })
    })
})

module.exports = route