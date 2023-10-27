const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  category: String,
  subCategory: String,
  gender: String,
  brand: String,
  image: Array,
  actualPrice: Number,
  offerPrice: Number,
  size: String,
  description: String,
  status: { type: String, default: "pending" },
  franchise: { type: mongoose.Schema.Types.ObjectId, ref: "Franchise" },
  lastEdited: { type: Date, default: Date.now() },
  createdOn: { type: Date, default: Date.now() },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
