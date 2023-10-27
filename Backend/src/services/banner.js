const Banner = require("../../models/bannerSchema");

const bannerService = {
  createBannerService: async (data) => {
    const result = await Banner.create({
      ...data,
    });
    return result;
  },
  getBannerService: async () => {
    const result = await Banner.find();
    return result;
  },
};

module.exports = { bannerService };
