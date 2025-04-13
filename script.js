//API routing for server side

//importing modules (express for API routing)
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//get the static files from "project" directory (index.html, login.html)
app.use(express.static(path.join(__dirname, 'project')));

//route index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'index.html'));
});

//route for Discover page
//route login.html
app.get('/discover', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'discover.html'));
});

//route login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'login.html'));
});

//initiate server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});