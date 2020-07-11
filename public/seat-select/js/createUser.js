const { v4: uuidv4 } = require('uuid');
const reservation = require('../../../test-data/reservations')
const flights = require('../../../test-data/flightSeating')

const createUser = (req, res) => {
  // access the data of the user from the fetch in HandleConfirmSeat with req.body
  const userData = req.body;
  // create unique ID with the package
  const userID = uuidv4();
  // find the index of the seat
  let flightSeat = flights.flights[userData.flight].findIndex(x => x.id === userData.seat)
  // update the availability
  flights.flights[userData.flight][flightSeat].isAvailable = false;
  // add the newly created id to the user object
  userData.id = userID;
  // push the user to the "user bank"
  reservation.reservations.push(userData)
  // post the results back to the fetch
  res.status(200).send({ status: 'success', id: userID})
}

module.exports = createUser;