const mongoose = require("mongoose");

let AuthorSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
  },
  { timestamps: true },
);
AuthorSchema.virtual("authorBooks", {
  ref: "Books",
  localField: "_id",
  foreignField: "author",
});
AuthorSchema.set("toObject", { virtuals: true });
AuthorSchema.set("toJSON", { virtuals: true });
module.exports = mongoose.model("Author", AuthorSchema);
