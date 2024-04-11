import React, { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutsDetails";
import WorkoutForm from "../components/WorkoutForm";
import { authenticationValues } from "../../auth/isAuthenticated";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = authenticationValues();

      const response = await fetch(`http://localhost:3300/api/workouts`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      const json = await response.json();

      if (response.status == 200) {
        setWorkouts(json);
      } else {
        setMsg(json.error);
      }
    };

    fetchWorkouts();
  }, []);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]);
  };

  const handleDelete = async (workoutId) => {
    const response = await fetch(
      `http://localhost:3300/api/workouts/${workoutId}`,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: `${token}`,
        // },
      }
    ).catch((error) => {
      setMsg("Failed to delete.");
    });
    const json = await response.json();

    if (!response.ok) {
      setMsg("Failed to delete.");
    } else {
      const afterDeleteWorkout = workouts.filter(
        (workout) => workout._id !== json._id
      );
      setWorkouts(afterDeleteWorkout);
      setMsg("Deleted successfully.");
    }
  };

  const handleUpdate = async (workoutId) => {
    console.log("Hello");
  };

  return (
    <div className="home">
      <div className="workouts">
        <div>{msg}</div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              onDelete={() => handleDelete(workout._id)}
            />
          ))}
      </div>
      <WorkoutForm
        addWorkout={addWorkout}
        handleDelete={handleDelete}
        // handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default Home;
