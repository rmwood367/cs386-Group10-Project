// Server side of scrpt.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "project" directory
app.use(express.static(path.join(__dirname, 'project')));

// Route for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'index.html'));
});

// Route for login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'login.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
