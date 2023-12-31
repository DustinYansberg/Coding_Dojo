const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, required: [true, "description is required"] },
    price: { type: Number, required: [true, "price is required"] },
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductSchema);
