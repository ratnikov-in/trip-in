const express = require('express')
const BASE_URL = '/api/auth'
const authRoutes = require('./routes/auth')
const tripRoutes = require('./routes/trip')
const tripsRoutes = require('./routes/trips')
const driversRoutes = require('./routes/drivers')
const passengersRoutes = require('./routes/passengers')
const gateway = express()

gateway.use(BASE_URL, authRoutes)
gateway.use(BASE_URL, tripRoutes)
gateway.use(BASE_URL, tripsRoutes)
gateway.use(BASE_URL, driversRoutes)
gateway.use(BASE_URL, passengersRoutes)

module.exports = gateway
