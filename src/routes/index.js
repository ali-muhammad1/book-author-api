const Router = require("express").Router();
const { publicRoutes } = require("./v1/public");
const { authorize } = require("../midlewares");
let version = `/${process.env.VER}`;

publicRoutes.forEach((route) => {
  Router.use(version + route.path, authorize, route.route);
});

module.exports = Router;
