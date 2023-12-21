const { Workout } = require("../models/workoutModel");
const mongoose = require("mongoose");

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
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ err: "no workout" });
    }
    const workout = await Workout.findById(req.params.id);

    //   if workout dosent exists
    if (!workout) {
      res.status(400);
      return res.json({ msg: "Workout Not Found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const editWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ err: "no workout found by that id" });
  }
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!workout) {
    res.status(404);
    return res.json({ error: "error happend" });
  }
  res.json(workout);
};

const deleteWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ err: "no workout" });
  }
  const workout = await Workout.findByIdAndDelete(req.params.id);

  if (!workout) {
    return res.status(400).json({ error: "Workout Not found" });
  }

  res.status(200).json({ msg: "Workout Has Been Deleted" });
};

module.exports = {
  getWorkouts,
  addWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
};
