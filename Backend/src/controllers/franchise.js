const { franchiseService } = require("../services/franchise");

const createFranchise = async (req, res, next) => {
  try {
    const result = await franchiseService.createFranchiseService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateFranchise = async (req, res, next) => {
  try {
    const result = await franchiseService.updateFranchise(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const loginFranchise = async (req, res, next) => {
  try {
    const result = await franchiseService.loginService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getFranchise = async (req, res, next) => {
  try {
    const result = await franchiseService.getFranchiseService();
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  createFranchise,
  updateFranchise,
  loginFranchise,
  getFranchise,
};
