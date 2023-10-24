const express = require('express')
const router = express.Router()

const controller = require('../controllers/word-controller')

router.get('/:word', controller.get)

module.exports = router