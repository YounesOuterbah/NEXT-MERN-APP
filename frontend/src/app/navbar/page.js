import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar w-full h-20 flex items-center justify-between text-2xl font-bold">
        workoutBuddy
        <ul className="flex text-base">
          <Link className="cursor-pointer mr-4" href="/">
            Home
          </Link>
          <Link className="cursor-pointer" href="/workouts">
            Add Workout
          </Link>
        </ul>
      </div>
    </div>
  );
}
