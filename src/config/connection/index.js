const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.DB_URL, {});
  mongoose.connection.on("connected", () => console.log("DB Connected"));
  mongoose.connection.on("open", () => console.log("DB Connection is open"));
  mongoose.connection.on("disconnected", () => console.log("DB Disconnected"));
  mongoose.connection.on("error", () =>
    console.log("An error occured while connecting DB"),
  );
};

module.exports = connectDB;
