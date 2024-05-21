const gamesRouter = require("express").Router();

const { findAllGames, createGame } = require("../middlewares/games");
const sendGameCreated = require("../controllers/games");

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

module.exports = gamesRouter;
