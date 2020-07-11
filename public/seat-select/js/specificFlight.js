// access flight data
const flights = require('../../../test-data/flightSeating');

// return all seat info from specific flight
// flight number obtained from params in url
const specificFlight = (req, res) => {
  let flightNumber = req.params.flight
  let flightInfo = flights.flights[flightNumber]

  res.json(flightInfo)
}

module.exports = specificFlight;