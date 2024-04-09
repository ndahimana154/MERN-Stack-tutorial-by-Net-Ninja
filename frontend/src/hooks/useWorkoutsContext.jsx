import { WorkoutsContext } from "../contexts/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "UseWorkoutsContext must be used inside an WorkoutsContextProvide"
    );
  }

  return context;
};
