// Данный route используется для создания и изменения поездки
const express = require('express')
const controller = require('../controllers/trip')
const router = express.Router()

router.get('/:idTrip', controller.view)
router.post('/create', controller.create)
router.patch('/:idTrip', controller.update)
router.delete('/:idTrip', controller.remove)

module.exports = router
