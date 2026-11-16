Have suggestions or ideas for improvement? Feel free to share your feedback or open an issue
Student Management API

A RESTful backend application built using Node.js, Express.js, and MySQL to manage student records.

Features

- Create student records
- Retrieve all students
- Retrieve a student by ID
- Update student details
- Delete student records
- Input validation
- Parameterized SQL queries
- MySQL connection pooling
- Environment variable configuration

Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- JavaScript
- dotenv

Project Structure

student-management-api/
│
├── controllers/
│   └── studentController.js
│
├── routes/
│   └── studentRoutes.js
│
├── db.js
├── server.js
├── package.json
├── package-lock.json
└── .env

Installation

git clone https://github.com/Chandrashekhar1yh23/student-management-api.git

cd student-management-api

npm install

Database Setup

Create a MySQL database:

CREATE DATABASE student_management;

USE student_management;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    course VARCHAR(100) NOT NULL
);

Environment Configuration

Create a ".env" file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=student_management
DB_PORT=3306

Never upload your actual database credentials to GitHub.

Run the Application

node server.js

Server runs at:

"http://localhost:3000"

API Endpoints

Method| Endpoint| Description
GET| "/students"| Get all students
GET| "/students/:id"| Get student by ID
POST| "/students"| Create student
PUT| "/students/:id"| Update student
DELETE| "/students/:id"| Delete student

Example POST Request

{
  "name": "Ananya",
  "course": "Computer Science"
}

Example Response

{
  "message": "Student added successfully!",
  "student": {
    "id": 1,
    "name": "Ananya",
    "course": "Computer Science"
  }
}

Backend Architecture

Client / Postman
       |
       v
    server.js
       |
       v
  Express Middleware
       |
       v
 studentRoutes.js
       |
       v
studentController.js
       |
       v
      db.js
       |
       v
  MySQL Database

Learning Outcomes

- REST API development
- Express routing and middleware
- MVC-style separation of routes and controllers
- MySQL database integration
- CRUD operations
- Async/await
- Parameterized SQL queries
- Environment variable management
- HTTP status codes and error handling

Future Improvements

- JWT authentication
- Role-based authorization
- Pagination and searching
- Centralized error handling
- API testing
- Swagger documentation

Repository

"GitHub – Student Management API" (https://github.com/Chandrashekhar1yh23/student-management-api)
