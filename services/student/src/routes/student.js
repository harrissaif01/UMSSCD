const express = require("express");
const Student = require("../models/student");

const router = express.Router();

// Create a new student record
router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all student records
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Read specific student record
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send({ error: "Student not found" });
        }
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a student's information
router.put("/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!student) {
            return res.status(404).send({ error: "Student not found" });
        }
        res.send(student);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a student record
router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send({ error: "Student not found" });
        }
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
