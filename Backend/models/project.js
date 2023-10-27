const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  banner: [{ type: mongoose.Types.ObjectId, ref: "Banner" }],
  category: [{ type: mongoose.Types.ObjectId, ref: "Category" }],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
