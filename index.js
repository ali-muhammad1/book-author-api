const express = require("express");
const app = express();
const env = require("dotenv").config();
const routes = require("./src/routes");
const initializer = require("./src/helpers");

initializer();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 4444, () => {
  console.log(`Server is running on port ${process.env.PORT || 4444}`);
});
