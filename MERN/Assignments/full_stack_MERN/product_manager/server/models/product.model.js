const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductSchema);
