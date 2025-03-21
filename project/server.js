const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allows the frontend and backend to communicate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your database username
  password: "", // Replace with your database password
  database: "FilmHaven",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to the database.");
  }
});

// Sign-Up Endpoint
app.post("/signup", async (req, res) => {
  const { firstName, lastName, birthDate, emailSignup, passwordSignup } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(passwordSignup, 10);

    // Insert user into the database
    const query = "INSERT INTO users (first_name, last_name, birth_date, email, password_hash) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [firstName, lastName, birthDate, emailSignup, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ message: "Error signing up. Please try again." });
      } else {
        res.status(200).json({ message: "Sign-Up Successful!" });
      }
    });
  } catch (error) {
    console.error("Error processing sign-up:", error);
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
