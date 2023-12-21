const { User } = require("../models/userModel");


// login
const userLogin = async (req, res) => {
  res.json({ msg: "user logged in" });
  
};

// sign up
const userSign = async (req, res) => {
  res.json({ msg: "user siggend up" });
};

module.exports = {
  userLogin,
  userSign,
};
