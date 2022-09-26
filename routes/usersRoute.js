const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getRandomUser,
} = require("../controllers/usersController");

const router = express.Router();

router.route("/random").get(getRandomUser);

router.route("/all").get(getUsers);

router.route("/save").post(createUser);

router.route("/update").patch(updateUser);

router.route("/delete").delete(deleteUser);

module.exports = router;
