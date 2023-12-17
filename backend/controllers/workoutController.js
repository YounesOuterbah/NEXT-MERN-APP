const { Workout } = require("../models/workoutModel");

const getWorkouts = async (req, res) => {
  const workout = await Workout.find({});
  res.json(workout);
};

const addWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = new Workout({
      title,
      reps,
      load,
    });
    const result = await workout.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

const getWorkout = async (req, res) => {
  res.json({ msg: "get one workout" });
};

const editWorkout = async (req, res) => {
  res.json({ msg: "edit one workout" });
};

const deleteWorkout = async (req, res) => {
  res.json({ msg: "workout deleted" });
};

module.exports = {
  getWorkouts,
  addWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
};
