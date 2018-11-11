// Данный route используется для вывода списка пассажиров
const express = require('express')
const controller = require('../controllers/passengers')
const router = express.Router()

router.get('/:qFind', controller.find)
router.get('/passengers', controller.passengers)
module.exports = router
