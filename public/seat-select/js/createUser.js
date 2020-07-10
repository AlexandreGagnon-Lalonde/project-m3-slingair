const { v4: uuidv4 } = require('uuid');
const reservation = require('../../../test-data/reservations')

const createUser = (req, res) => {
  const userData = req.body;
  const userID = uuidv4();

  userData.id = userID;
  reservation.reservations.push(userData)

  res.status(200).send({ status: 'success', id: userID})
}

module.exports = createUser;