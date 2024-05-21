const usersRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
} = require("../middlewares/users");
const {
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
} = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated);
module.exports = usersRouter;
