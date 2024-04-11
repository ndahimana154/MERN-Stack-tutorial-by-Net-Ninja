import { useState } from "react";
import { authenticationValues } from "../../auth/isAuthenticated";
const WorkoutForm = ({ addWorkout }) => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = authenticationValues();
    const workout = { title, load, reps };

    const response = await fetch("http://localhost:3300/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const json = await response.json();

    if (response.status == 200) {
      setTitle("");
      setLoad("");
      setReps("");
      setError("");
      console.log("New workout added");
      addWorkout(json);
    } else {
      setError("Error ");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label>Exercise Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // className={emptyFields.includes("title") ? "error" : ""}
        required
      />
      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        // className={emptyFields.includes("load") ? "error" : ""}
        required
      />
      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        // className={emptyFields.includes("reps") ? "error" : ""}
        required
      />

      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
