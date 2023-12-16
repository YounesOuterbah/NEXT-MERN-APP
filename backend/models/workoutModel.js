const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = {
  workout,
};
