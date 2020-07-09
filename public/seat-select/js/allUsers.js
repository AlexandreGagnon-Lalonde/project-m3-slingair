const users = require('../../../test-data/reservations');

const allUsers = (req, res) => {

  res.json(users)
}

module.exports = allUsers;