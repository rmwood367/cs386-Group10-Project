// Redirect to the login page when "Get Started" button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.querySelector(".gt-button");
  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.location.href = "login.html"; // Redirect to the login page
    });
  }
});

function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get email and password values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send a request to the backend for login validation
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }) // Send user input
  })
    .then(response => {
      if (response.ok) {
        alert('Login successful! Welcome back to Film Haven.');
        window.location.href = '/dashboard'; // Redirect after successful login
      } else if (response.status === 401) {
        alert('Invalid email or password. Please try again.');
      } else if (response.status === 404) {
        alert('User not found. Please sign up first.');
      } else {
        alert('An error occurred during login. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during login. Please try again later.');
    });
}

function handleSignup(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form field values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthDate = document.getElementById('birthDate').value;
  const emailSignup = document.getElementById('emailSignup').value;
  const passwordSignup = document.getElementById('passwordSignup').value;

  // Send a request to the backend to create a new user
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, birthDate, emailSignup, passwordSignup }) // Send user details
  })
    .then(response => {
      if (response.ok) {
        alert('Signup successful! Welcome to Film Haven.');
        window.location.href = '/welcome'; // Redirect after successful signup
      } else {
        response.text().then(text => alert('Error: ' + text));
        alert('Signup failed. Please try again.');
        
      }
    })
    .catch(error => {
      console.error('Fetch error:', error); // Log fetch failure
      alert('Failed to fetch. Please check the server connection.');
    });
}
