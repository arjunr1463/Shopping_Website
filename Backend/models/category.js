const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  subcategory: [],
  createdOn: { type: Date, default: Date.now() },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
