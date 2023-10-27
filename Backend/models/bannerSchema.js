const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: String,
  image: String,
  status: { type: String, default: "pending" },
  createdOn: { type: Date, default: Date.now() },
});

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;
