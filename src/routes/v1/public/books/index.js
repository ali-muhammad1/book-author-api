const Router = require("express").Router();
const {
  getAll,
  addOne,
  updateOne,
  deleteOne,
  getOneById,
} = require("../../../../contrllers/books.controller");

Router.get("/", getAll);
Router.post("/add", addOne);
Router.get("/:id", getOneById);
Router.patch("/:id", updateOne);
Router.delete("/:id", deleteOne);

module.exports = Router;
