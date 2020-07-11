// const flights = require('../../../test-data/flightSeating');

// const handleFlight = (req, res) => {
//   // grab flight number from the url params
//   const { flightNumber } = req.params;
//   // get all flight numbers
//   const allFlights = Object.keys(flights.flights);
//   // is flightNumber in the array?
//   console.log('REAL FLIGHT: ', allFlights.includes(flightNumber));
//   // if flight exists, send flight information
//   if (allFlights.includes(flightNumber)) {
//     res.json(flights.flights[flightNumber])
//   } else {
//     throw 'Not a valid flight'
//   }
// };

// module.exports = handleFlight;