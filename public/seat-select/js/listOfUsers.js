const users = require('../../../test-data/reservations');

const lifOfUsers = (req, res) => {
  res.json(users.reservations)
}

module.exports = lifOfUsers;