const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    schedule: [{
        day: { type: String },
        startTime: { type: String },
        endTime: { type: String }
    }],
    tasks: [{ type: String }],
});

module.exports = mongoose.model("Faculty", facultySchema);
