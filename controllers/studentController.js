
const pool = require("../db");

// CREATE - Add a student
const createStudent = async (req, res) => {
    try {
        const { name, course } = req.body;

        if (!name || !course) {
            return res.status(400).json({
                message: "Name and course are required"
            });
        }

        const [result] = await pool.execute(
            "INSERT INTO students (name, course) VALUES (?, ?)",
            [name, course]
        );

        res.status(201).json({
            message: "Student added successfully!",
            student: {
                id: result.insertId,
                name,
                course
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ - Get all students
const getAllStudents = async (req, res) => {
    try {
        const [rows] = await pool.execute(
            "SELECT * FROM students"
        );

        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ - Get student by ID
const getStudentById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const [rows] = await pool.execute(
            "SELECT * FROM students WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE - Update student
const updateStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, course } = req.body;

        if (!name || !course) {
            return res.status(400).json({
                message: "Name and course are required"
            });
        }

        const [existing] = await pool.execute(
            "SELECT * FROM students WHERE id = ?",
            [id]
        );

        if (existing.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await pool.execute(
            "UPDATE students SET name = ?, course = ? WHERE id = ?",
            [name, course, id]
        );

        res.json({
            message: "Student updated successfully!",
            student: { id, name, course }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE - Delete student
const deleteStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const [result] = await pool.execute(
            "DELETE FROM students WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export all controller functions
module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
