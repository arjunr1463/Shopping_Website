const Franchise = require("../../models/franchise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const franchiseService = {
  createFranchiseService: async (data) => {
    const findemail = await Franchise.findOne({
      email: data.email,
    });
    const findmobile = await Franchise.findOne({ mobile: data.mobile });
    if (!findemail && !findmobile) {
      const password = await bcrypt.hash(data.password, 10);
      const confirmPassword = await bcrypt.hash(data.confirmPassword, 10);
      if (data.password !== data.confirmPassword) {
        return "password does not match";
      } else {
        const franchise = await Franchise.create({
          ...data,
          password: password,
          confirmPassword: confirmPassword,
        });
        return {
          success: true,
          data: franchise,
        };
      }
    } else {
      if (findemail) {
        return "Email Taken";
      } else if (findmobile) {
        return "Mobile Taken";
      }
    }
  },
  updateFranchise: async (data) => {
    const updateFranchise = await Franchise.findByIdAndUpdate(
      data.id,
      {
        ...data,
      },
      {
        new: true,
      }
    );
    return updateFranchise;
  },
  loginService: async (data) => {
    const franchise = await Franchise.findOne({ email: data.email });
    if (!franchise) {
      return { email: "Email not registered" };
    }
    const isPasswordValid = await bcrypt.compare(
      data.password,
      franchise.password
    );
    if (!isPasswordValid) {
      return { password: "Incorrect password" };
    }
    const token = jwt.sign({ userId: franchise._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return { success: token };
  },
  getFranchiseService: async () => {
    const franchiseId = id;
    const findFranchise = await Franchise.findById(franchiseId);
    return findFranchise;
  },
};

module.exports = { franchiseService };
