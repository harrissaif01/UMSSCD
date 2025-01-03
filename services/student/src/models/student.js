const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    grades: [{
        examId: { type: mongoose.Schema.Types.ObjectId, required: true },
        grade: { type: String },
    }],
    attendance: [{
        date: { type: Date },
        status: { type: String, enum: ["Present", "Absent", "Late"] },
    }],
});

module.exports = mongoose.model("Student", studentSchema);
