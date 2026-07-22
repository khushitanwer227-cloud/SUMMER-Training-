## Task Management System

A modern, full-stack Task Management application built using the MERN stack (MongoDB, Express, React, Node.js) with 
JWT-based authentication and clean UI.

## Features

 Secure Authentication:  User register & login with JWT (JSON Web Token) and hashed passwords.
 
 Task CRUD Operations:  Complete functionality to Create, Read, Update, and Delete tasks.
 
 Search & Filter:  Instant task search by title and filtering by status (`To Do`, `In Progress`, `Done`).
 
 Priority & Deadlines:  Organize tasks using priority tags (`Low`, `Medium`, `High`) and clear due dates.

 Protected Routes & Middleware:  Express middleware enforcing token check and handling expired/invalid sessions smoothly.

 Responsive UI: Clean, modern interface designed with React and Tailwind CSS.

State/Storage: React Hooks, LocalStorage

##  Tech Stack

### Frontend

Framework: React.js (Vite)
Styling: Tailwind CSS / CSS3

### Backend

Runtime Environment: Node.js
Framework: Express.js
Security & Auth: JSON Web Tokens (`jsonwebtoken`), CORS

# Authentication & Authorization (JWT)
Concept: Securing the app using JSON Web Tokens (JWT).
## How it works:

When a user logs in with valid credentials, the backend generates an encrypted string (JWT Token).
The frontend stores this token in localStorage.
For every subsequent request (like fetching or creating tasks), the frontend sends this token in the header:

# RESTful API Architecture

Concept: Representational State Transfer — a standard architectural style for client-server communication using standard HTTP methods:

GET: Retrieve data from server (e.g., fetch task list).
POST: Send new data to server (e.g., create a task or log in).
PUT / PATCH: Update existing data (e.g., change task status from "To Do" to "Done").
DELETE: Remove data (e.g., delete a task).

# git clone 
[https://github.com/khushitanwer227-cloud/SUMMER-Training-.git]

# Backend Setup

cd backend
npm install
npm run dev

Server runs on: http://localhost:5000

# Frontend Setup
Open a new terminal window/tab:

cd frontend
npm install
npm run dev

Web App runs on: http://localhost:5173



