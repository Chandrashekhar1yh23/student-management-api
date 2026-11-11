
const express = require("express");

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Import student routes
const studentRoutes = require("./routes/studentRoutes");

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to Student Management API!");
});

// Connect student routes
app.use("/students", studentRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
