const express = require("express");
const Attendance = require("../models/attendance");

const router = express.Router();

// Create a new attendance record
router.post("/", async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).send(attendance);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all attendance records
router.get("/", async (req, res) => {
    try {
        const records = await Attendance.find();
        res.send(records);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update an attendance record
router.put("/:id", async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!attendance) {
            return res.status(404).send({ error: "Attendance record not found" });
        }
        res.send(attendance);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete an attendance record
router.delete("/:id", async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!attendance) {
            return res.status(404).send({ error: "Attendance record not found" });
        }
        res.send(attendance);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
