const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Student Service running on port ${PORT}`));
