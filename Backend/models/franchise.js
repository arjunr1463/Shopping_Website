const mongoose = require("mongoose");

const franchiseSchema = new mongoose.Schema({
  franchiseName: String,
  fullName: String,
  mobile: { type: String, unique: true },
  email: { type: String, unique: true },
  address: String,
  state: String,
  district: String,
  city: String,
  pincode: String,
  password: String,
  confirmPassword: String,
  accountNumber: String,
  branchName: String,
  bankName: String,
  ifsc: String,
  gstNumber: String,
  gstCertificate: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createdOn: { type: Date, default: Date.now() },
});

const Franchise = mongoose.model("Franchise", franchiseSchema);
module.exports = Franchise;
