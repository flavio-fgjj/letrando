'use strict'

const repository = require('../repositories/word-repository')

exports.get = async(req, res, next) => {
  try {
    const data = await repository.get(req.params.word)
    res.status(200).send(data)
  } catch (err) {
    //console.log('Falha ao buscar palavra ', req.params.word)
    res.status(500).send({
      message: 'Falha ao buscar palavra'
    })
  }
}