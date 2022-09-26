const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getRandomUser,
} = require("../controllers/usersController");

const router = express.Router();

router.route("/random").get(getRandomUser);

router.route("/all").get(getUsers);

router.route("/").post(createUser);

router.route("/:id").delete(deleteUser).patch(updateUser);

module.exports = router;
