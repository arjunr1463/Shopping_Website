const { bannerService } = require("../services/banner");

const createBanner = async (req, res, next) => {
  try {
    const result = await bannerService.createBannerService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getBanner = async (req, res, next) => {
  try {
    const result = await bannerService.getBannerService();
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  createBanner,
  getBanner,
};
