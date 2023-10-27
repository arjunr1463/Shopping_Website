const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  mobile: { type: String, unique: true },
  email: { type: String, unique: true },
  address: String,
  state: String,
  district: String,
  pincode: String,
  password: String,
  confirmPassword: String,
  createdOn: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
