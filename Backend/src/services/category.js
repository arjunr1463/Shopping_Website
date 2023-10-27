const Category = require("../../models/category");

const categoryService = {
  createCategoryService: async (data) => {
    const category = await Category.create({
      ...data,
    });

    return category;
  },

  getCategoryService: async () => {
    const category = await Category.find();
    return category;
  },
};

module.exports = { categoryService };
