// Import required modules
  //express handles routing and requests
const express = require('express');
const bodyParser = require('body-parser');
// Use mysql2 for database operations
const mysql = require('mysql2'); 
// use environment variables for securit y
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
    //exit procces
    process.exit(1); 
  }
  //otherwise succes in console.
  console.log('Connected to the Railway database!');
});



// Signup endpoint
  // define sigup handle psot requsts
app.post('/signup', async (req, res) => {
  // extrat user data provided
  const { firstName, lastName, birthDate, emailSignup, passwordSignup } = req.body;
  //debugging
  console.log(req.body);
  // use sql to inset users user data into users table
  const sql = 'INSERT INTO users (first_name, last_name, birth_date, email, password, role, is_first_login) VALUES (?, ?, ?, ?, ?, ?, ?)';
  try {
      // Set is_first_login to true on signup
      const [result] = await db.promise().query(sql, [firstName, lastName, birthDate, emailSignup, passwordSignup, 'user', true]); 
      // show succes to client
      res.send('User signed up successfully!');
  } catch (err) {
     // erorr message to console 
      console.error('Error inserting user:', err);
      return res.status(500).send('Error saving user to the database');
  }
});


app.use(express.json());

// Login endpoint (updated)
app.post('/login', async (req, res) => {
  //ectract data from user into req
  const { email, password } = req.body; 
  // Log request data for debugging
  console.log('Login attempt for:', email);

  // SQL query to find the user by email
  const sql = 'SELECT id, password, is_first_login FROM users WHERE email = ?';


  try {
    // Query the database fetch data from user
    const [results] = await db.promise().query(sql, [email]);
    console.log('Database results:', results);

    // Check if the user exists
    if (results.length === 0) {
      console.log('User not found:', email);
      return res.status(404).json({ message: 'User not found' });
    }
    //exract user from results
    const user = results[0];

    // Verify the password (consider using bcrypt for hashed passwords)
    const isPasswordValid = user.password === password; 
    if (!isPasswordValid) {
      console.log('Password mismatch for:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('Login successful for user ID:', user.id);

    // Determne redirection based on `is_first_login`
    let redirectPage = user.is_first_login ? 'userPrefrence.html' : 'displaypage.html';

    // Update `is_first_login` if true
    if (user.is_first_login) {
      const updateSql = 'UPDATE users SET is_first_login = ? WHERE id = ?';
      await db.promise().query(updateSql, [false, user.id]);
      console.log('is_first_login updated for user ID:', user.id);
    }

    // Include userId in the response
    const responseData = {
      message: 'Login successful!',
      //redirect to page 
      redirectPage: redirectPage,
      userId: user.id,
    };

    console.log("User ID being sent in response:", responseData.userId);

    // Send the response
    res.status(200).json(responseData);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ message: 'Database error occurred. Please try again later.' });
  }
});



// user role enpoint

app.post('/update-role', async (req, res) => {
  //extract userID and accounttype from the request body
  const { userId, accountType } = req.body;
  // Ensure userId and accountType are logged
  console.log("Received data:", req.body); 
  
  // Check if either userId or accountType is missing
  if (!userId || !accountType) {
    // log error
    console.error("Missing userId or accountType");
    // Respond with a 400 Bad Request
    return res.status(400).send({ message: 'Missing userId or accountType.' });
  }

  // Define valid account roles
  const validRoles = ['user', 'admin', 'publisher'];

  // Check if the provided accountType is valid
  if (!validRoles.includes(accountType)) {
    // Log the error
    console.error("Invalid accountType:", accountType);
    // Respond with a 400 Bad Request
    return res.status(400).send({ message: 'Invalid account type.' });
  }

  try {
    // SQL query to update the user's role in the database
    const updateRoleSql = 'UPDATE users SET role = ? WHERE id = ?';
    // Execute the query and destructure the result
    const [result] = await db.promise().query(updateRoleSql, [accountType, userId]);
    // Log the SQL query result for debugging
    console.log("SQL Result:", result); // Debug query execution
    // Check if any rows were updated
    if (result.affectedRows === 0) {
      // Log the error
      console.error("No rows updated. Invalid userId:", userId);
      // respond with a 404 not forund
      return res.status(404).send({ message: 'User not found.' });
    }
    // eespond with success if the role was updated
    res.send({ message: 'Role updated successfully!' });
  } catch (err) {
    // log any errors that occur during query excution
    console.error('Error updating role:', err);
    // eespond with a 500 internal Server Error
    res.status(500).send({ message: 'Failed to update role.' });
  }
});




//user genres endpoint
app.post('/update-genres', async (req, res) => {
  //extract userId and favGenres from the request body
  const { userId, favoriteGenres } = req.body;

  try {
    // Clear old favorite genres
    const deleteGenresSql = 'DELETE FROM favGenres WHERE user_id = ?';
    await db.promise().query(deleteGenresSql, [userId]);

    // Insert new favorite genres
    const genreValues = favoriteGenres.map((genreId) => [userId, genreId]);
    const insertGenresSql = 'INSERT INTO favGenres (user_id, genre_id) VALUES ?';
    await db.promise().query(insertGenresSql, [genreValues]);
    //send a success response back to the client
    res.send({ message: 'Genres updated successfully!' });
  } catch (err) {
    //handle any errors that occur during the database operations
    console.error('Error updating genres:', err);
    res.status(500).send({ message: 'Failed to update genres.' });
  }
});

//userPorfile endpoint
app.post('/update-profile', async (req, res) => {
  //get userid,bio and pic url from req
  const { userId, bio, profilePictureURL } = req.body;

  try {
    // SQL commnd to update the users prefrnes in profile
    const updateProfileSql = 'UPDATE UserProfiles SET bio = ?, profile_picture_url = ? WHERE user_id = ?';
    await db.promise().query(updateProfileSql, [bio, profilePictureURL, userId]);
    //send succesfule response to client
    res.send({ message: 'Profile updated successfully!' });
  } catch (err) {
    // log any errors that occur during execution (debug)
    console.error('Error updating profile:', err);
    res.status(500).send({ message: 'Failed to update profile.' });
  }
});


// Display userProfile endpoint

app.get('/get-profile', async (req, res) => {
  const userId = req.query.userId;
  console.log('Fetching profile for userId:', userId); // Debug log

  if (!userId) {
      console.error('Missing userId in request');
      return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
      const getProfileSql = `
          SELECT bio, profile_picture_url
          FROM UserProfiles
          WHERE user_id = ?;
      `;
      console.log('Executing SQL query:', getProfileSql); // Debug SQL
      const [results] = await db.promise().query(getProfileSql, [userId]);
      console.log('Query results:', results); // Debug query results

      if (results.length === 0) {
          console.error(`No profile found for userId: ${userId}`);
          return res.status(404).json({ error: 'User profile not found.' });
      }

      const userProfile = results[0];
      res.status(200).json({
          bio: userProfile.bio || "No bio provided.",
          profilePictureURL: userProfile.profile_picture_url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
  } catch (err) {
      console.error('Error fetching user profile:', err);
      res.status(500).json({ error: 'An error occurred while fetching user profile.' });
  }
});


// enpoint for geting users name
app.get('/get-username', async (req, res) => {
  const userId = req.query.userId;
  console.log('Fetching username for userId:', userId); // Debug log

  if (!userId) {
    console.error('Missing userId in request');
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    const getUserNameSql = `
    SELECT first_name
    FROM users
    WHERE id = ?;
    `;
    console.log('Executing SQL query:', getUserNameSql); // Debug SQL
    const [results] = await db.promise().query(getUserNameSql, [userId]);
    console.log('Query results:', results); // Debug query results

    if (results.length === 0) {
      console.error(`No user found for userId: ${userId}`);
      return res.status(404).json({ error: 'User not found.' });
    }

    // Map the correct property
    const userName = results[0]?.first_name || 'Guest';
    res.status(200).json({ name: userName }); // Send as { name: 'brian' }
  } catch (err) {
    console.error('Error fetching user name:', err);
    res.status(500).json({ error: 'An error occurred while fetching user name.' });
  }
});




// Start the server (already present)
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
