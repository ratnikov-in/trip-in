const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const config = require('../config')
module.exports.login = async function (req, res) {
  const candidate = await User.findOne({
    login: req.body.email
  })
  if (candidate) {
    if (bcrypt.compareSync(req.body.password, candidate.password)) {
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, config.JWT, { expiresIn: 3600 })
      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      res.status(401).json({
        message: `У пользователя ${candidate.fullName} пароль не верен`
      })
    }
  } else {
    res.status(404).json({
      message: `Пользователь с ${candidate.login} не найден`
    })
  }
}
module.exports.register = async function (req, res) {
  const candidate = await User.findOne({
    login: req.body.email
  })
  if (candidate) {
    res.status(409).json({
      message: 'Такой login уже существует, попробуйте другой'
    })
  } else {
    const user = new User({
      login: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(13)),
      fullName: req.body.fullName
    })
    try {
      await user.save()
      res.status(201).json({
        message: `Пользователь ${user.fullName} создан`
      })
    } catch (error) {
      console.error(error)
    }
  }
}
module.exports.update = function (req, res) {
  res.status(500).json({
    update: true
  })
}
