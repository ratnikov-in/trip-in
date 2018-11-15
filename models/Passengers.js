const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passengersSchema = new Schema({
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
module.exports = mongoose.model('passengers', passengersSchema())
