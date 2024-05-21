const usersRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  findUserById,
} = require("../middlewares/users");
const { sendUserCreated, sendUserById } = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);
module.exports = usersRouter;
