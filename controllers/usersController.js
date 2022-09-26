const users = require("../users.json");

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));
  res.send(user);
};

module.exports = { getUsers, getUser };
