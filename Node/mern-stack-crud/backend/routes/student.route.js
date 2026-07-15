// backend/routes/student.route.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE
router.post('/', async (req, res, next) => {
    try {
        const data = await Student.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
});

// READ All
router.get('/', async (req, res, next) => {
    try {
        const data = await Student.find();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

// READ One
router.get('/:id', async (req, res, next) => {
    try {
        const data = await Student.findById(req.params.id);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (error) {
        next(error);
    }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const data = await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted", data });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
