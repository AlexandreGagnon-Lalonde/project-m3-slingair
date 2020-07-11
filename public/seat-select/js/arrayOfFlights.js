const flights = require('../../../test-data/flightSeating');

// returns list of all flight number to create select dropdown for user
const arrayOfFlights = (req, res) => {
  let flightArray = Object.keys(flights.flights);

  res.json(flightArray)
}

module.exports = arrayOfFlights;