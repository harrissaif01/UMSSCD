const express = require("express");
const Exam = require("../models/exam");

const router = express.Router();

// Create an exam
router.post("/", async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.status(201).send(exam);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all exams
router.get("/", async (req, res) => {
    try {
        const exams = await Exam.find();
        res.send(exams);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
