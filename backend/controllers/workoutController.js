const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
// GET all Workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 });
  res.status(200).json(workouts);
};

// Get a single Workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findOne({ _id: id });
  if (!workout) {
    return res.status(404).json({ Error: "Workout not found!" });
  }
  res.status(200).json(workout);
};

// POST a new Workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// Update the workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  
  return res.status(200).json({ workout });
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
