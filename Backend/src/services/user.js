const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userService = {
  createUserService: async (data) => {
    const findemail = await User.findOne({
      email: data.email,
    });
    const findmobile = await User.findOne({ mobile: data.mobile });
    if (!findemail && !findmobile) {
      const password = await bcrypt.hash(data.password, 10);
      const confirmPassword = await bcrypt.hash(data.confirmPassword, 10);
      if (data.password !== data.confirmPassword) {
        return "password does not match";
      } else {
        const user = await User.create({
          ...data,
          password: password,
          confirmPassword: confirmPassword,
        });
        return user;
      }
    } else {
      if (findemail) {
        return "Email Taken";
      } else if (findmobile) {
        return "Mobile Taken";
      }
    }
  },
  loginService: async (data) => {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return { email: "Email not registered" };
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      return { password: "Incorrect password" };
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return { success: token };
  },
};

module.exports = { userService };
