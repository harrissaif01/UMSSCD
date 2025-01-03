const express = require("express");
const mongoose = require("mongoose");
const examRoutes = require("./routes/exams");
const gradeRoutes = require("./routes/grades");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/examination", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/exams", examRoutes);
app.use("/api/grades", gradeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Examination Service running on port ${PORT}`));
