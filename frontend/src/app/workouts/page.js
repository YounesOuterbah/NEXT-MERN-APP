"use client";
import { useState } from "react";

export default function AddWorkout({ fetchData }) {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("https://next-mern-app2222.onrender.com/api/workouts", {
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
    fetchData();
  };

  return (
    <form className="flex flex-col p-4 rounded py-2 basis-4/12" onSubmit={handleSubmit}>
      <p className="font-bold">ADD A NEW WORKOUT</p>
      <label htmlFor="workoutName">Excercie Title:</label>
      <input
        type="text"
        id="workoutName"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="workoutLoad">Load (in kg):</label>
      <input type="text" id="workoutLoad" value={load} onChange={(e) => setLoad(e.target.value)} />

      <label htmlFor="workoutReps">Number Of Reps:</label>
      <input type="text" id="workoutReps" value={reps} onChange={(e) => setReps(e.target.value)} />
      <input
        type="submit"
        value="ADD WORKOUT"
        className="bg-white p-2 rounded mt-2 cursor-pointer"
      />
    </form>
  );
}
