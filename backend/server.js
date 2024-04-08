const express = require("express");
const mongoose = require("mongoose");
const workoutsRoutes = require("./routes/workouts");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use((req, res, next) => {
  console.log(req.method, ": ", req.path);
  next();
});

// Parse URL Encoded Like HT|ML forms
app.use(express.urlencoded())

// Parse JSON Bodies
app.use(express.json())

// App use
app.use("/api/workouts", workoutsRoutes);

// COnnect DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Listen to PORT
    app.listen(port, () =>
      console.log(`DB connected and app listening on PORT: http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
