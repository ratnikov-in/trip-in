const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passengersSchema = new Schema({
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  trips: {
    ref: 'trips',
    type: Schema.Types.Array.ObjectId
  }
})
module.exports = mongoose.model('passengers', passengersSchema())
