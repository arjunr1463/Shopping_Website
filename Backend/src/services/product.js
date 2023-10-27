const Product = require("../../models/product");
const Franchise = require("../../models/franchise");

const productService = {
  createProductService: async (data) => {
    const franchiseId = id;
    console.log(franchiseId);
    if (franchiseId) {
      const product = await Product.create({
        ...data,
        franchise: franchiseId,
      });
      await Franchise.findByIdAndUpdate(franchiseId, {
        $push: {
          products: franchiseId,
        },
      });
      return product;
    }
  },
  getProductService: async () => {
    const product = await Product.find().populate("franchise");
    return product;
  },
};

module.exports = { productService };
