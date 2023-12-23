const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
};

// login
const userLogin = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "user not found" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.json({ error: "email or password is incorrect" });
  }

  res.status(200).json({ messgae: `welcome back ${user.name}` });
};

// sign up
const userSign = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please Fill All Fields" });
  }

  if (userExist) {
    return res.status(400).json({ error: "Email already in use" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await new User({
    name,
    email,
    password: hashedPassword,
  });

  const token = createToken(user._id);

  if (user) {
    user.save();
    res.status(201).json({ email, token, user });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
};

module.exports = {
  userLogin,
  userSign,
};
