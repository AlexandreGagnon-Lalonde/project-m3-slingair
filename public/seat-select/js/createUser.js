const { v4: uuidv4 } = require('uuid');
const reservation = require('../../../test-data/reservations')
const flights = require('../../../test-data/flightSeating')

const createUser = (req, res) => {
  const userData = req.body;
  const userID = uuidv4();

console.log('USERDATA', userData.flight)
console.log('FLIGHTS.FLIGHTS', flights)
  let flightSeat = flights.flights[userData.flight].findIndex(x => x.id === userData.seat)
console.log('FLIGHTSEAT', flightSeat)
console.log('FLIGHTS.FLIGHT[USERDATA.FLIGHT]', flights.flights[userData.flight])
console.log('FLIGHTS.FLIGHT[USERDATA.FLIGHT][9]', flights.flights[userData.flight][flightSeat])
console.log('FLIGHTS.FLIGHT[USERDATA.FLIGHT][9].ISAVAILABLE', flights.flights[userData.flight][flightSeat].isAvailable)

  flights.flights[userData.flight][flightSeat].isAvailable = false;
  console.log('FLIGHTS.FLIGHT[USERDATA.FLIGHT][9].ISAVAILABLE', flights.flights[userData.flight][flightSeat].isAvailable)


  userData.id = userID;
  reservation.reservations.push(userData)

  res.status(200).send({ status: 'success', id: userID})
}

module.exports = createUser;