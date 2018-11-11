const express = require('express')
const BASE_URL = '/api/'
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const tripRoutes = require('./routes/trip')
const tripsRoutes = require('./routes/trips')
const driversRoutes = require('./routes/drivers')
const passengersRoutes = require('./routes/passengers')
const gateway = express()

gateway.use(require('morgan')('dev'))
gateway.use(bodyParser.urlencoded({ extended: true }))
gateway.use(bodyParser.json())
gateway.use(require('cors')())

gateway.use(BASE_URL + 'auth', authRoutes)
gateway.use(BASE_URL + 'trip', tripRoutes)
gateway.use(BASE_URL + 'trips', tripsRoutes)
gateway.use(BASE_URL + 'drivers', driversRoutes)
gateway.use(BASE_URL + 'passengers', passengersRoutes)

module.exports = gateway
