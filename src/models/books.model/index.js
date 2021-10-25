const { ObjectId } = require("bson");
const mongoose = require("mongoose");

let BooksSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    isbn: { type: String },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Books", BooksSchema);
