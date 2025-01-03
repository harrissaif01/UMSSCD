const express = require("express");
const mongoose = require("mongoose");
const facultyRoutes = require("./routes/faculty");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/faculty", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/faculty", facultyRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Faculty Service running on port ${PORT}`));
