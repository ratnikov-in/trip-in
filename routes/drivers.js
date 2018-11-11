// Данный route используется для вывода списка водителей
const express = require('express')
const controller = require('../controllers/drivers')
const router = express.Router()

router.get('/:qFind', controller.find)
router.get('/drivers', controller.list)
module.exports = router
