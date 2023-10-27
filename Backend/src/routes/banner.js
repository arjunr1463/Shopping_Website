const { Router } = require("express");
const { createBanner, getBanner } = require("../controllers/banner");

const route = Router();

const bannerRoute = (app) => {
  app.use("/api/banner", route);
  route.post("/create", createBanner);
  route.get("/", getBanner);
};

module.exports = { bannerRoute };
