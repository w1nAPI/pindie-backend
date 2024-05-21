const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
} = require("../middlewares/games");
const {
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
} = require("../controllers/games");

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put("/games/:id", updateGame, sendGameUpdated);
module.exports = gamesRouter;
