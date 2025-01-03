const express = require("express");
const mongoose = require("mongoose");
const attendanceRoutes = require("./routes/attendance");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/attendance", attendanceRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Attendance Service running on port ${PORT}`));
