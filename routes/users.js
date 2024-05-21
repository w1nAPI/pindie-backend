const usersRouter = require("express").Router();
const { findAllUsers, createUser } = require("../middlewares/users");
const sendUserCreated = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
module.exports = usersRouter;
