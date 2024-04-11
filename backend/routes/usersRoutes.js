
const express = require("express");

// Controller functions
const { loginUser, signupUser } = require("../controllers/userController");


const router = express.Router();
// Login
router.post("/login", loginUser);

// Signup Route
router.post("/signup", signupUser);

module.exports = router;
