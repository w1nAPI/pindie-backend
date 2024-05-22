const usersRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  hashPassword,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
} = require("../controllers/users");
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.delete("/games/:id", deleteUser, sendUserDeleted);
module.exports = usersRouter;
