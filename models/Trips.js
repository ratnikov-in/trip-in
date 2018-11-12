const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tripsSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  when: {
    type: Date,
    default: Date.now,
    required: true
  },
  create: {
    type: Date,
    default: Date.now
  },
  driver: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    default: ''
  },
  passengers: {
    ref: 'users',
    type: Schema.Types.Array.ObjectId,
    default: ''
  },
  creator: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  }
})
module.exports = mongoose.model('trips', tripsSchema())
