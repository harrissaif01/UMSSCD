const express = require("express");
const Grade = require("../models/grade");

const router = express.Router();

// Create a grade
router.post("/", async (req, res) => {
    try {
        const grade = new Grade(req.body);
        await grade.save();
        res.status(201).send(grade);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all grades
router.get("/", async (req, res) => {
    try {
        const grades = await Grade.find();
        res.send(grades);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a grade
router.put("/:id", async (req, res) => {
    try {
        const grade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!grade) {
            return res.status(404).send({ error: "Grade not found" });
        }
        res.send(grade);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a grade
router.delete("/:id", async (req, res) => {
    try {
        const grade = await Grade.findByIdAndDelete(req.params.id);
        if (!grade) {
            return res.status(404).send({ error: "Grade not found" });
        }
        res.send(grade);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
