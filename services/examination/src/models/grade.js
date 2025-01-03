const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, required: true },
    examId: { type: mongoose.Schema.Types.ObjectId, required: true },
    grade: { type: String, required: true },
    remarks: { type: String },
});

module.exports = mongoose.model("Grade", gradeSchema);
