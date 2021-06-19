const express = require("express");

const {
  getList,
  getDetail,
  create,
  remove,
  update,
} = require("../controllers/movie.controller");

const movieRouter = express.Router();

movieRouter.get("/", getList);
movieRouter.post("/", create);
movieRouter.get("/:id", getDetail);
movieRouter.put("/:id", update);
movieRouter.delete("/:id", remove);

module.exports = {
  movieRouter,
};
