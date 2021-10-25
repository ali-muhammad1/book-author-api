const Router = require("express").Router();
const authorRoutes = require("./author");
const booksRoutes = require("./books");

const publicRoutes = [
  {
    path: "/authors",
    route: authorRoutes,
  },
  {
    path: "/books",
    route: booksRoutes,
  },
];

module.exports = { publicRoutes };
