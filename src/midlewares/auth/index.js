const auth = (req, res, next) => {
  if (req.headers["x-api-key"] === process.env.API_KEY) {
    next();
  } else {
    res.send({ message: "not athorized user", status: 402 });
  }
};

module.exports = auth;
