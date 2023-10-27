const { Router } = require("express");
const { createProduct, getProduct } = require("../controllers/product");
const jwt = require("../../middlewares/jwt");

const route = Router();

const productRoute = (app) => {
  app.use("/api/product", route);
  route.post("/create", jwt, createProduct);
  route.get("/", getProduct);
};

module.exports = { productRoute };
