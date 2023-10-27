const mongoose = require("mongoose");

const uri = process.env.DATABASE;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("🎉 Connected to database successfully! 🎉");
});

module.exports = db;
