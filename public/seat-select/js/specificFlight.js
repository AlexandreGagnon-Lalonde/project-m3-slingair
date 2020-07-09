const flights = require('../../../test-data/flightSeating');

const specificFlight = (req, res) => {
  let flightNumber = req.params.flight
  let flightInfo = flights.flights[flightNumber]

  res.json(flightInfo)
}

module.exports = specificFlight;