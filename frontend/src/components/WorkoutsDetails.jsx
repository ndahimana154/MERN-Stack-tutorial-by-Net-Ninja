import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetails = ({ workout, onDelete, onUpdate }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): {workout.load}</strong>
      </p>
      <p>
        <strong>Reps: {workout.reps}</strong>
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={onDelete}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
