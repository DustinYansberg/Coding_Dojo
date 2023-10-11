const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author Name is required"],
      minlength: [3, "The Authors Name must have at least three characters"],
    },
  },
  { timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);
