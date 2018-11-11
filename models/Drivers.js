const mongoose = require('mongoose')
const Schema = mongoose.Schema
const driversSchema = new Schema({
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  trips: {
    ref: 'trips',
    type: Schema.Types.Array.ObjectId
  }
})
module.exports = mongoose.model('drivers', driversSchema())
