const { Router } = require("express");
const {
  createFranchise,
  loginFranchise,
  updateFranchise,
  getFranchise,
} = require("../controllers/franchise");
const jwt = require("../../middlewares/jwt");

const route = Router();

const franchiseRoute = (app) => {
  app.use("/api/franchise", route);
  route.post("/create", createFranchise);
  route.post("/login", loginFranchise);
  route.get("/", jwt, getFranchise);
  route.put("/update", updateFranchise);
};

module.exports = { franchiseRoute };
