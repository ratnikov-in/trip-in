const mongoose = require('mongoose')
const Schema = mongoose.Schema
const driversSchema = new Schema({
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  trips: {
    ref: 'trips',
    type: Schema.Types.Array.ObjectId,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})
module.exports = mongoose.model('drivers', driversSchema())
