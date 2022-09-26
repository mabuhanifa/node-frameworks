let users = require("../users.json");

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));
  res.send(user);
};

const createUser = (req, res) => {
  const body = req.body;
  users.push(body);
  res.send(users);
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id !== Number(id));
  res.send(users);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));
  const body = req.body;
  user.name = body.name;
  user.id = id ? Number(id) : Number(user.id);
  user.name = body.name ? body.name : user.name;
  user.gender = body.gender ? body.gender : user.gender;
  user.contact = body.contact ? body.contact : user.contact;
  user.address = body.address ? body.address : user.address;
  user.photoUrl = body.photoUrl ? body.photoUrl : user.photoUrl;
  res.send(user);
};
module.exports = { getUsers, getUser, createUser, deleteUser, updateUser };
