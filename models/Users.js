const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usersSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  biography: {
    type: [String],
    default: ''
  },
  passenger: {
    type: Boolean,
    default: true
  },
  driver: {
    type: Boolean,
    default: false
  },
  rating: {
    ref: 'ratings',
    type: Schema.Types.ObjectId
  }
})
module.exports = mongoose.model('users', usersSchema)
