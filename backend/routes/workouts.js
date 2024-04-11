const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// Get all Workouts
router.get("/", verifyToken, getWorkouts);

// Get single workout
router.get("/:id", verifyToken, getWorkout);
  
// Post a workout
router.post("/", verifyToken, createWorkout);

// Delete a workout
router.delete("/:id", verifyToken, deleteWorkout);

// Update the Workout
router.patch("/:id", verifyToken, updateWorkout);

module.exports = router;
