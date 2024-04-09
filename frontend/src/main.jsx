import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { WorkoutsContextProvider } from "./contexts/WorkoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <workoutContextProvider>
      <App />
    </workoutContextProvider>
  </React.StrictMode>
);
