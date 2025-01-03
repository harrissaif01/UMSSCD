const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ["Present", "Absent", "Late"], required: true },
    remarks: { type: String },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
