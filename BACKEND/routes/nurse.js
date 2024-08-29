const express = require("express");
const router = express.Router();
const Nurse = require("../Models/nurse"); // Import the Nurse model

// CREATE a Nurse
router.post("/", async (req, res) => {
    try {
        const nurse = new Nurse(req.body);
        await nurse.save();
        res.status(201).json(nurse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ all Nurses
router.get("/get", async (req, res) => {
    try {
        const nurses = await Nurse.find();
        res.status(200).json(nurses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ a single Nurse by ID
router.get("/:id", async (req, res) => {
    try {
        const nurse = await Nurse.findById(req.params.id);
        if (!nurse) return res.status(404).json({ error: "Nurse not found" });
        res.status(200).json(nurse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// UPDATE a Nurse
router.put("/:id", async (req, res) => {
    try {
        const nurse = await Nurse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!nurse) return res.status(404).json({ error: "Nurse not found" });
        res.status(200).json(nurse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a Nurse
router.delete("/:id", async (req, res) => {
    try {
        const nurse = await Nurse.findByIdAndDelete(req.params.id);
        if (!nurse) return res.status(404).json({ error: "Nurse not found" });
        res.status(200).json({ message: "Nurse deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
