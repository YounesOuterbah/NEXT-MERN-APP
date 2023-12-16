const express = require("express");
const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "all workout" });
});

// add new workout
router.post("/", (req, res) => {
  res.json({ msg: "one workout added" });
});

// get one workout
router.get("/:id", (req, res) => {
  res.json({ msg: "get one workout" });
});

// edit workout
router.put("/:id", (req, res) => {
  res.json({ msg: "edit one workout" });
});

// delete workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "workout deleted" });
});

module.exports = router;
