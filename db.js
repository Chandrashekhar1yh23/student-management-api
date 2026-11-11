
const mysql = require("mysql2/promise");
require("dotenv").config();

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Check database connection
pool.getConnection()
    .then(connection => {
        console.log("MySQL Database Connected Successfully!");
        connection.release();
    })
    .catch(error => {
        console.log("Database Connection Failed:", error.message);
    });

module.exports = pool;
