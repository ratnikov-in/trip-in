module.exports.view = function (req, res) {
  res.status(200).json({
    viewTrip: true
  })
}
module.exports.create = function (req, res) {
  res.status(200).json({
    createTrip: true
  })
}
module.exports.update = function (req, res) {
  res.status(200).json({
    modifyTrip: true
  })
}
module.exports.remove = function (req, res) {
  res.status(200).json({
    addtoTrip: true
  })
}
