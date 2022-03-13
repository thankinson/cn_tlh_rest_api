const { Router } = require("express");
const { addMovie, listMovie, updateMovie, deleteMovie } = require("./movieControllers");
const movieRouter = Router();
// endpoints
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovie); // get dose not recive body - has no body - same with delete
movieRouter.patch("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);
module.exports = movieRouter;
