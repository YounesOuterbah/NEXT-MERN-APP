"use client";
import { useEffect, useState } from "react";
import formateDistanceToNow from "date-fns/formatDistanceToNow";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AddWorkout from "./workouts/page";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

  const deleteData = async (id) => {
    const response = await fetch(`https://next-mern-app2222.onrender.com/api/workouts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch("https://next-mern-app2222.onrender.com/api/workouts");
    const data = await response.json();
    setWorkouts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="landing">
        <ToastContainer theme="colored" />
        <div className="container flex flex-col-reverse md:flex-row">
          <div className="box py-2 basis-9/12">
            {workouts.map((workout) => (
              <div
                key={workout._id}
                className="card p-2 shadow-md bg-white text-black m-2 rounded relative"
              >
                <h3 className="text-green-600 font-bold text-2xl">{workout.title}</h3>
                <h3 className="font-bold">Load (kg): {workout.load}</h3>
                <h3 className="font-bold">Number Of Reps: {workout.reps}</h3>
                <p className="font-bold">
                  Created: {formateDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
                </p>
                <span
                  onClick={() => (deleteData(workout._id), toast.error("Deleted Successfully"))}
                  className="cursor-pointer hover:text-red-400 duration-300 text-2xl absolute top-4 right-4"
                >
                  X
                </span>
              </div>
            ))}
          </div>
          <AddWorkout fetchData={fetchData} />
        </div>
      </div>
    </>
  );
}
