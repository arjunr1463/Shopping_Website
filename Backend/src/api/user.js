const { bannerRoute } = require("../routes/banner");
const { categoryRoute } = require("../routes/category");
const { franchiseRoute } = require("../routes/franchise");
const { productRoute } = require("../routes/product");
const { userRoute } = require("../routes/user");

const user = (app) => {
  userRoute(app);
  franchiseRoute(app);
  productRoute(app);
  categoryRoute(app);
  bannerRoute(app);
};

module.exports = { user };
