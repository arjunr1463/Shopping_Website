const { Router } = require("express");
const { createCategory, getCategory } = require("../controllers/category");

const route = Router();

const categoryRoute = (app) => {
  app.use("/api/category", route);
  route.post("/create", createCategory);
  route.get("/", getCategory);
};

module.exports = { categoryRoute };
