const express = require("express");

const router = express.Router();

// Import controller functions
const {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentcontroller");

// CREATE
router.post("/", createStudent);

// READ all students
router.get("/", getAllStudents);

// READ student by ID
router.get("/:id", getStudentById);

// UPDATE
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);

module.exports = router;
