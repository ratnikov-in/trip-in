// Данный route используется для создания и изменения поездки
const express = require('express')
const controller = require('../controllers/trip')
const router = express.Router()

router.get('/:idTrip', controller.view)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.delete('/remove', controller.remove)

module.exports = router
