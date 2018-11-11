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
    required: true
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
