const { userService } = require("../services/user");

const createUser = async (req, res, next) => {
  try {
    const result = await userService.createUserService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const result = await userService.loginService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = { createUser, loginUser };
