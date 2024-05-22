const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

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
  sendMe,
} = require("../controllers/users");
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.delete("/games/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
