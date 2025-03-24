// Import required modules
  //express handles routing and requests
const express = require('express');
const bodyParser = require('body-parser');
// Use mysql2 for database operations
const mysql = require('mysql2'); 
// use environment variables for security
require('dotenv').config(); 

// inizlit app creating instnce of express
const app = express(); 

// Middleware
  //analyze data from requests
app.use(bodyParser.urlencoded({ extended: true }));
  //analyze code of json requests
app.use(express.json()); 
  //allow reqst from diff. domanis
  const cors = require('cors');
  app.use(cors());
  app.use(cors({ origin: 'http://127.0.0.1:3000' })); 
  app.options('*', cors());

// analyze the http requests
app.use(express.json());


// seeting up the sql database
const db = mysql.createConnection({
  // database connction details
  host: 'metro.proxy.rlwy.net',        
  user: 'root',                         
  password: 'oeGyJZlNdCNPeyOjQPNKKASiBbWQqZOL', 
  database: 'railway',                  
  port: 43745                           
});

// testing the connection;
db.connect((err) => {
  // error ocurs
  if (err) {
    // eror message in console
    console.error('Database connection failed:', err);
    return;
  }
  //otherwise succes in console.
  console.log('Connected to the Railway database!');
});



// Signup endpoint
  // define sigup handle psot requsts
app.post('/signup', (req, res) => {
  // extrat user data provided
  const { firstName, lastName, birthDate, emailSignup, passwordSignup } = req.body;
  //debugging
  console.log(req.body); 

  // use sql to inset users user data into users table
  const sql = 'INSERT INTO users (first_name, last_name, birth_date, email, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, birthDate, emailSignup, passwordSignup], (err, result) => {
    if (err) {
      // erorr message to console 
      console.error('Error inserting user:', err);
      return res.status(500).send('Error saving user to the database');
    }
    // show succes to client
    res.send('User signed up successfully!');
  });
});


app.use(express.json());

// Login endpoint
app.post('/login', (req, res) => {
  //ectract data from user into req
  const { email, password } = req.body;
  // Log request data for debugging
  console.log(req.body); 

  // SQL query to find the user by email
  const sql = 'SELECT * FROM users WHERE email = ?';
  //check if user exist with emai
  db.query(sql, [email], (err, results) => {
    if (err) {
      //return error to client
      console.error('Database query error:', err);
      return res.status(500).send('Database error');
    }
    // if it exists
    if (results.length > 0) {
      //obatain user data
      const user = results[0];
      //ccompare the passwords 
      if (user.password === password) { 
        //send succes to client
        res.send('Login successful!');
      } else {
        //send error to client pass word not mtach
        res.status(401).send('Invalid credentials'); 
      }
    } else {
      // send user not found
      res.status(404).send('User not found'); 
    }
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  // show cosole message server running.
  console.log('Server running on http://localhost:3000');
});
