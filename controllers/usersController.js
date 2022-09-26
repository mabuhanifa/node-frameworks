const users = require("../users.json");
const getUsers = (req, res) => {
  res.send(users);
};

module.exports = { getUsers };
