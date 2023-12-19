"use client";
import { useState } from "react";

export default function AddWorkout() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("http://localhost:3001/api/workouts", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added", data);
    }
  };

  return (
    <div className="landing bg-green-400 h-screen pt-2">
      <div className="container flex justify-center mt-20">
        <form className="flex flex-col p-4 rounded bg-gray-300" onSubmit={handleSubmit}>
          <p>ADD A NEW WORKOUT</p>
          <label htmlFor="workoutName">Excercie Title:</label>
          <input
            type="text"
            id="workoutName"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="workoutLoad">Load (in kg):</label>
          <input
            type="text"
            id="workoutLoad"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />

          <label htmlFor="workoutReps">Number Of Reps:</label>
          <input
            type="text"
            id="workoutReps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          <input
            type="submit"
            value="ADD WORKOUT"
            className="bg-white p-2 rounded mt-2 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
