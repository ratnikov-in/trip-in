module.exports.find = function (req, res) {
  res.status(200).json({
    passengersFind: true
  })
}
module.exports.list = function (req, res) {
  res.status(200).json({
    passengersList: true
  })
}
