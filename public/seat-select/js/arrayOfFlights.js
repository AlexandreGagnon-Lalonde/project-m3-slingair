const flights = require('../../../test-data/flightSeating');

const arrayOfFlights = (req, res) => {
  let flightArray = Object.keys(flights.flights);

  res.json(flightArray)
}

module.exports = arrayOfFlights;