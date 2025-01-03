const express = require("express");
const Faculty = require("../models/faculty");

const router = express.Router();

// Create a new faculty member
router.post("/", async (req, res) => {
    try {
        const faculty = new Faculty(req.body);
        await faculty.save();
        res.status(201).send(faculty);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all faculty members
router.get("/", async (req, res) => {
    try {
        const facultyMembers = await Faculty.find();
        res.send(facultyMembers);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a faculty member's information
router.put("/:id", async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!faculty) {
            return res.status(404).send({ error: "Faculty member not found" });
        }
        res.send(faculty);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a faculty member
router.delete("/:id", async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!faculty) {
            return res.status(404).send({ error: "Faculty member not found" });
        }
        res.send(faculty);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
