const { User } = require("../models/userModel");
const bcrype = require("bcrypt");

// login
const userLogin = async (req, res) => {
  res.json({ msg: "user logged in" });
};

// sign up
const userSign = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).json({ error: "Email already in use" });
  }

  const salt = await bcrype.genSalt(10);
  const hashedPassword = await bcrype.hash(password, salt);

  const user = await new User({
    email,
    password: hashedPassword,
  });

  if (user) {
    user.save();
    res.status(201).json({ email, password, user });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
};

module.exports = {
  userLogin,
  userSign,
};
