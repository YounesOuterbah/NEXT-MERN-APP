const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
const cors = require("cors");

connectDB();

app.use(express.json());

app.use(cors());

app.use("/api/workouts", require("./routes/workoutRoutes"));

const PORT = process.env.PORT || "3001";
app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
