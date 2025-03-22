// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Use mysql2 for database operations
require('dotenv').config(); // Use environment variables for security

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.json()); // Parse JSON request bodies
const cors = require('cors');
app.use(cors());
app.use(express.json());



// Set up the database connection
const db = mysql.createConnection({
  host: 'metro.proxy.rlwy.net',         // Host
  user: 'root',                         // Username
  password: 'oeGyJZlNdCNPeyOjQPNKKASiBbWQqZOL', // Password
  database: 'railway',                  // Database Name
  port: 43745                           // Port
});

// Test the connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the Railway database!');
});

app.use(express.json());

// Signup endpoint
app.post('/signup', (req, res) => {
  const { firstName, lastName, birthDate, emailSignup, passwordSignup } = req.body;
  console.log(req.body); // Debug log

  const sql = 'INSERT INTO users (first_name, last_name, birth_date, email, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, birthDate, emailSignup, passwordSignup], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).send('Error saving user to the database');
    }
    res.send('User signed up successfully!');
  });
});


app.use(express.json());
// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log(req.body); // Log request data for debugging

  // SQL query to find the user by email
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
      const user = results[0]; // Get user data
      if (user.password === password) { // Compare  passwords
        res.send('Login successful!');
      } else {
        res.status(401).send('Invalid credentials'); // Password not correct;
      }
    } else {
      res.status(404).send('User not found'); // No matching email
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
