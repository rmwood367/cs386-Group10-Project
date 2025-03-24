// Redirect to the login page when "Get Started" button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.querySelector(".gt-button");
  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.location.href = "signup.html"; // Redirect to the login page
    });
  }
});


//proccess user login
function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  // get email and password values from users input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send a request to the backend for login validation
  fetch('http://localhost:3000/login', {
    //specify method http
    method: 'POST',
    //include headers infroming server of json 
    headers: { 'Content-Type': 'application/json' },
    //send the provided email and password
    body: JSON.stringify({ email, password })
  })
  //handling the response from back end
    .then(response => {
      if (response.ok) {
        //messge for succes
        alert('Login successful! Welcome back to Film Haven.');
        window.location.href = 'displaypage.html'; // placehoder once user logs in diret to site...
        // else alert for differnte errors
      } else if (response.status === 401) { 
        alert('Invalid email or password. Please try again.');
      } else if (response.status === 404) {
        alert('User not found. Please sign up first.');
      } else { 
        alert('An error occurred during login. Please try again later.');
      }
    })
    // detect erros with servor
    .catch(error => {
      // show messag to console and alert
      console.error('Error:', error);
      alert('An error occurred during login. Please try again later.');
    });
}


//handle the signup
function handleSignup(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from user input in singup fileds
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthDate = document.getElementById('birthDate').value;
  const emailSignup = document.getElementById('emailSignup').value;
  const passwordSignup = document.getElementById('passwordSignup').value;

  // Send a request to the backend to create a new user
  fetch('http://localhost:3000/signup', {
    //chose mothod for http
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    //convert to json objects
    body: JSON.stringify({ firstName, lastName, birthDate, emailSignup, passwordSignup }) // Send user details
  })
  // handle the resopnes of the server
    .then(response => {
      // succeful!
      if (response.ok) {
        // message succes and load mpage
        alert('Signup successful! Welcome to Film Haven.');
        window.location.href = '/placeholder'; // placholder for new page after signup
      } else {
        // unscuccesful alert uncsufull message
        response.text().then(text => alert('Error: ' + text));
        alert('Signup failed. Please try again.');
        
      }
    })
    // detect errors with the server
    .catch(error => {
      //alert a fail message to server
      console.error('Fetch error:', error); // Log fetch failure
      alert('Failed to fetch. Please check the server connection.');
    });
}
