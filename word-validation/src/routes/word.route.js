const express = require('express')
const router = express.Router()

const wordController = require('../controllers/word.controller')

router.get('/:word', wordController.getWord)

module.exports = router