const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.listen("3001", (req, res) => {
  console.log(`server started on port ${process.env.PORT}`);
});
