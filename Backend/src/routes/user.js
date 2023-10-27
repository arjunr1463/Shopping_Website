const { createUser, loginUser } = require("../controllers/user");
const { Router } = require("express");

const route = Router();

const userRoute = (app) => {
  app.use("/api/user", route);
  route.post("/create", createUser);
  route.post("/login", loginUser);
};

module.exports = { userRoute };
