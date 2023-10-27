const { productService } = require("../services/product");

const createProduct = async (req, res, next) => {
  try {
    const result = await productService.createProductService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const result = await productService.getProductService();
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  createProduct,
  getProduct,
};
