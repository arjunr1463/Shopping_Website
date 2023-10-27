const { categoryService } = require("../services/category");

const createCategory = async (req, res, next) => {
  try {
    const result = await categoryService.createCategoryService(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
const getCategory = async (req, res, next) => {
  try {
    const result = await categoryService.getCategoryService();
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = { createCategory, getCategory };
