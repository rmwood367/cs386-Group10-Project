//Declare varibles
let preferences = {};


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
  // Prevent the default form submission
  event.preventDefault();
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
    body: JSON.stringify({ email, password }),
  })
  //handling the response from back end
    .then((response) => {
      if (response.ok) {
        // Parse backend response
        return response.json(); 
      } else {
        // if response fail (debug)
        alert('response failed')
        throw new Error('Login failed');
      }
    })
    .then((data) => {
      // Parse backend response
      console.log("Login response data:", data); 
      // Verify userId received from backend
      console.log("Login response userId:", data.userId); 
      // After login
      preferences.userId = data.userId;
      // Save userId to localStorage
      localStorage.setItem('userId', data.userId); 
      console.log("Preferences object after login:", preferences); 
      // Debug preferences object
      alert(data.message);
      // Redirect to the next page
      window.location.href = data.redirectPage; 
    })
    // detect erros with servor
    .catch((error) => {
      // show messag to console and alert
      console.error("Error during login:", error);
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
        window.location.href = 'login.html'; // placholder for new page after signup
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

//PREFENCES UPDATING
// add dom listenr wait for content load
document.addEventListener("DOMContentLoaded", () => {
  // Ensure the script only runs when these sections are in the DOM
  const accountTypeSection = document.getElementById("accountTypeSection");
  const genresSection = document.getElementById("genresSection");
  const bioSection = document.getElementById("bioSection");
  // get refrences to froms in prefrences
  const accountTypeForm = document.getElementById("accountTypeForm");
  const genresForm = document.getElementById("genresForm");
  const bioForm = document.getElementById("bioForm");
  // get refrences to account type selction elemtns
  const accountTypeSelect = document.getElementById("accountType");
  const adminPinContainer = document.getElementById("adminPinContainer");
  const adminPinInput = document.getElementById("adminPin");

  

  // Ensure the DOM elements exist before attaching event listeners
  if (accountTypeSelect) {
    // Show/hide admin PIN based on account type
    accountTypeSelect.addEventListener("change", () => {
      if (accountTypeSelect.value === "admin") {
        // Show admin PIN input when "admin" is selected
        adminPinContainer.style.display = "block";
      } else {
        // Hide admin PIN input otherwise
        adminPinContainer.style.display = "none";
        // Clear Admin PIN input
        adminPinInput.value = ""; 
      }
    });
  }
  // Check if the account type form exists before attaching an event listener
  if (accountTypeForm) {
    // Handle Account Type submission
    accountTypeForm.addEventListener("submit", (event) => {
      // Prevent the form from refreshing the page
      event.preventDefault();
      // Get the selected account type
      const accountType = accountTypeSelect.value;
      // Get the entered admin PIN if applicable
      const adminPin = adminPinInput.value;
    
      if (accountType === "admin" && adminPin !== "1234") {
        alert("Invalid Admin PIN. Please enter the correct PIN.");
        return;
      }
    
      // Retrieve userId from localStorage and debug logs
      preferences.userId = localStorage.getItem('userId');
      console.log("Retrieved userId from localStorage:", localStorage.getItem('userId'));
      console.log("Preferences after retrieving userId:", preferences);
    
      console.log("Sending data to /update-role:", {
        userId: preferences.userId,
        accountType,
      });
      // Make a fetch request to the backend to update the user's role
      fetch("http://localhost:3000/update-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: preferences.userId, accountType }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Role updated successfully!");
            // Hide the account type section
            accountTypeSection.style.display = "none";
            // Show the genres section
            genresSection.style.display = "block";
          } else {
            alert("Failed to update role.");
          }
        })
        .catch((error) => {
          //log errors
          console.error("Error:", error);
          alert("An error occurred while updating the role.");
        });
        // Save locally for future use
      preferences.accountType = accountType; 
    });    
    
  }

    // Check if the genres form exists before attaching an event listener
  if (genresForm) {
    // Handle Genres submission
    genresForm.addEventListener("submit", (event) => {
      // Prevent the form from refreshing the page
      event.preventDefault();
      // Get the selected favorite genres by mapping over the checked checkbox
      const favoriteGenres = Array.from(
        document.querySelectorAll('input[name="favoriteGenres[]"]:checked')
      ).map((checkbox) => checkbox.value);
      // Validate that at least one genre is selected
      if (favoriteGenres.length === 0) {
        alert("Please select at least one genre.");
        // stop the submission if no genres are selected

        return;
      }
      // make fetch requst to the backend to update the favGenres
      fetch("http://localhost:3000/update-genres", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: preferences.userId, favoriteGenres }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Genres updated successfully!");
            // Hide the genres section
            genresSection.style.display = "none";
            // Show the bio section
            bioSection.style.display = "block";
          } else {
            alert("Failed to update genres.");
          }
        })
        // Log any errors
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while updating genres.");
        });
       // save slected genres locally for furtre use
      preferences.favoriteGenres = favoriteGenres; 
    });
  }

  if (bioForm) {
    // Handle Bio and Profile submission
    bioForm.addEventListener("submit", (event) => {
      // Prevent the form from refreshing the page
      event.preventDefault();
      // Get the entered bio
      const bio = document.getElementById("bio").value;
      const profilePictureURL = document.getElementById("profilePictureURL").value;
      // Make a fetch request to the backend to update the user's profile
      fetch("http://localhost:3000/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: preferences.userId, bio, profilePictureURL }),
      })
      //handling server response
        .then((response) => {
          if (response.ok) {
            alert("Profile updated successfully!");
            // Redirect after submission
            window.location.href = "displaypage.html"; 
          } else {
            alert("Failed to update profile.");
          }
        })
        .catch((error) => {
          //log errors
          console.error("Error:", error);
          alert("An error occurred while updating the profile.");
        });
      // Save localy
      preferences.bio = bio; 
      preferences.profilePictureURL = profilePictureURL; 
    });
  }
});


// Profile editing section
function openEditProfileModal() { // This function does not store the data in a database -- issue
  const modal = document.getElementById('editProfileModal');
  modal.style.display = 'block';
  
  // Populate form with current values
  document.getElementById('editUsername').value = document.getElementById('usernameText').innerText;
  document.getElementById('editProfilePic').value = document.getElementById('profilePic').src;
  document.getElementById('editBio').value = document.getElementById('userBio').innerText;
  document.getElementById('editTwitter').value = document.getElementById('twitterLink').href;
  document.getElementById('editLetterboxd').value = document.getElementById('letterboxdLink').href;
  document.getElementById('editInstagram').value = document.getElementById('instagramLink').href;
  document.getElementById('editMoviesWatched').value = document.getElementById('moviesWatched').querySelector('.stat-number').innerText;
  document.getElementById('editReviewsMade').value = document.getElementById('reviewsMade').querySelector('.stat-number').innerText;
  document.getElementById('editListsCreated').value = document.getElementById('listsCreated').querySelector('.stat-number').innerText;
}

function closeEditProfileModal() {
  document.getElementById('editProfileModal').style.display = 'none';
}

function saveProfileChanges() {
  // Update profile elements
  document.getElementById('usernameText').innerText = document.getElementById('editUsername').value;
  document.getElementById('profilePic').src = document.getElementById('editProfilePic').value;
  document.getElementById('userBio').innerText = document.getElementById('editBio').value;
  
  // Update social links
  document.getElementById('twitterLink').href = document.getElementById('editTwitter').value;
  document.getElementById('letterboxdLink').href = document.getElementById('editLetterboxd').value;
  document.getElementById('instagramLink').href = document.getElementById('editInstagram').value;
  
  // Update stats
  document.getElementById('moviesWatched').querySelector('.stat-number').innerText = document.getElementById('editMoviesWatched').value;
  document.getElementById('reviewsMade').querySelector('.stat-number').innerText = document.getElementById('editReviewsMade').value;
  document.getElementById('listsCreated').querySelector('.stat-number').innerText = document.getElementById('editListsCreated').value;
  
  closeEditProfileModal();
}
