const users = require('../../../test-data/reservations');

const allUsers = (req, res) => {
  console.log(users)
  let userId = req.params
  console.log(userId)
  res.json(users.reservations.find(x => x.id == userId.users))
}

module.exports = allUsers;