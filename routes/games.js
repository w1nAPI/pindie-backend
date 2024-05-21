const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
} = require("../middlewares/games");
const { sendGameCreated, sendGameById } = require("../controllers/games");

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);
module.exports = gamesRouter;
