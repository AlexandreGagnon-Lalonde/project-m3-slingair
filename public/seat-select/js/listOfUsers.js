// access data file from repo
const users = require('../../../test-data/reservations');

// send info for all users on server data
const lifOfUsers = (req, res) => {
  res.json(users.reservations)
}

// export function to be usable elsewhere
module.exports = lifOfUsers;