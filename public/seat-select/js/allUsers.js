const users = require('../../../test-data/reservations');

// req.params to grab user id and return specific info
const allUsers = (req, res) => {
  let userId = req.params
  res.json(users.reservations.find(x => x.id == userId.users))
}

module.exports = allUsers;