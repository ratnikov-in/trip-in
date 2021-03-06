const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ratingsSchema = new Schema({
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  trip: {
    ref: 'trips',
    type: Schema.Types.ObjectId
  },
  rating: {
    type: Number,
    default: 5
  },
  create: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('ratings', ratingsSchema())
