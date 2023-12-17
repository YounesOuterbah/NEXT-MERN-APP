const express = require("express");
const {
  getWorkouts,
  addWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// get all workouts
// add new workout
router.route("/").get(getWorkouts).post(addWorkout);

// get one workout
// edit workout
// delete workout
router.route("/:id").get(getWorkout).put(editWorkout).delete(deleteWorkout);

module.exports = router;
