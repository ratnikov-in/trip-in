// Данный route используется для вывода списка поездок
const express = require('express')
const controller = require('../controllers/trips')
const router = express.Router()

router.get('/:qFind', controller.find)
router.get('/trips', controller.list)
module.exports = router
