module.exports.find = function (req, res) {
  res.status(200).json({
    driversFind: true
  })
}
module.exports.list = function (req, res) {
  res.status(200).json({
    driversList: true
  })
}
