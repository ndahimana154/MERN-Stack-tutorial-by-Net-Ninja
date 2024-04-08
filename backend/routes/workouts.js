const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// Get all Workouts
router.get("/", getWorkouts);

// Get single workout
router.get("/:id", getWorkout);

// Post a workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update the Workout
router.patch("/:id", updateWorkout);

module.exports = router;
