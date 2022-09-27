let users = require("../users.json");

const getUsers = (req, res) => {
  const { limit } = req.query;
  if (limit) {
    res.send(users.slice(0, Number(limit)));
  } else {
    res.send(users);
  }
};

const getRandomUser = (req, res) => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const length = users.length;
  const rndInt = random(1, length);
  const user = users.find((u) => u.id === Number(rndInt));
  res.send(user);
};

const createUser = (req, res) => {
  const id = Math.max(...users.map((d) => d.id));
  const body = req.body;
  if (
    !body.id ||
    !body.name ||
    !body.gender ||
    !body.contact ||
    !body.address ||
    !body.photoUrl
  ) {
    res.status(405).send("please fill every properties");
  } else {
    users.push(body);
    const sorted = users.sort((a, b) => {
      return a.id - b.id;
    });
    res.send(sorted);
  }
};

const deleteUser = (req, res) => {
  const { id } = req.body;
  users = users.filter((u) => u.id !== Number(id));
  if (!id) {
    res.status(405).send("please provide an id");
  } else {
    res.send(users);
  }
};

const updateUser = (req, res) => {
  const body = req.body;

  const id = body.id;

  const user = users.find((u) => u.id === Number(id));
  if (
    !body.id ||
    !body.name ||
    !body.gender ||
    !body.contact ||
    !body.address ||
    !body.photoUrl
  ) {
    res.status(405).send("please fill every properties");
  } else {
    user.id = id;
    user.name = body.name;
    user.gender = body.gender;
    user.contact = body.contact;
    user.address = body.address;
    user.photoUrl = body.photoUrl;
    res.send(user);
  }
};
const bulkUpdate = (req, res) => {
  const body = req.body;
  length = body.length;

  for (let i = 0; i < length; i++) {
    if (!body[i].id) {
      res.status(405).send("please provide an id");
    } else {
      let user = users.find((u) => u.id === Number(body[i].id));
      let index = users.findIndex((u) => u.id === Number(body[i].id));

      let updatedUser = {
        id: Number(body[i].id),
        name: body[i].name ? body[i].name : user.name,
        gender: body[i].gender ? body[i].gender : user.gender,
        contact: body[i].contact ? body[i].contact : user.contact,
        address: body[i].address ? body[i].address : user.address,
        photoUrl: body[i].photoUrl ? body[i].photoUrl : user.photoUrl,
      };
      users[index] = updatedUser;
    }
  }

  res.send(users);
};

module.exports = {
  getUsers,
  getRandomUser,
  createUser,
  deleteUser,
  updateUser,
  bulkUpdate,
};
