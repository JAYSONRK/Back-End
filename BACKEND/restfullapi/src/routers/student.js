// studentRouter.js
const express = require('express');
const router = express.Router();
const Student = require('../models/students');

// Route to create new student
router.post("/", async (req, res) => {
    try {
        const user = new Student(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send({ message: "An error occurred while creating a new student." });
    }
});

// Route to get all students
router.get("/", async (req, res) => {    
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while retrieving student data." });
    }
});

// Route to get individual student by ID
router.get("/:id", async (req, res) => {    
    try {
        const id = req.params.id; 
        const studentData = await Student.findById(id); 
        res.send(studentData);
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while retrieving student data." });
    }
});

// Route to update student by ID
router.patch("/:id", async (req, res) => {    
    try {
        const id = req.params.id;
        const update = req.body;
        const updateStudent = await Student.findByIdAndUpdate(id, update, { new: true });
        if (!updateStudent) {
            return res.status(404).send({ message: "Student not found." });
        }
        res.send(updateStudent);
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while updating student data." });
    }
});

// Route to delete student by ID
router.delete("/:id", async (req, res) => {    
    try {
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if (!deleteStudent) {
            return res.status(404).send({ message: "Student not found." });
        }
        res.send({ message: "Student successfully deleted." });
    } catch(err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred while deleting student data." });
    }
});

module.exports = router;
