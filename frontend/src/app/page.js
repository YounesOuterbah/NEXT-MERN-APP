"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

  const deleteData = async (id) => {
    const response = await fetch(`/api/workouts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch("/api/workouts");
    const data = await response.json();
    setWorkouts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="landing bg-slate-100 h-screen">
        <div className="container">
          <div className="box p-2">
            {workouts.map((workout) => (
              <div key={workout._id} className="card p-2 bg-gray-500 text-white m-2 rounded">
                <h3 className="text-red-400 font-bold text-2xl">{workout.title}</h3>
                <h3>Workout Load: {workout.load}</h3>
                <h3>Number Of Reps: {workout.reps}</h3>
                <p>Created at: {workout.createdAt}</p>
                <span onClick={() => deleteData(workout._id)}>Click To Delete</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
