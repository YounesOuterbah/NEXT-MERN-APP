const express = require("express");
const { userLogin, userSign } = require("../controllers/usersController");
const router = express.Router();

router.post("/login", userLogin);
router.post("/sign", userSign);

module.exports = router;
