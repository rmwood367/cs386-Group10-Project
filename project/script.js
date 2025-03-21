
//function to take you to login page by clicling Get Started buttton
document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.querySelector(".gt-button");
  //if button gets clicked
  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.location.href = "login.html"; //  go to login.html
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    // Gather form data
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      birthDate: document.getElementById("birthDate").value,
      emailSignup: document.getElementById("emailSignup").value,
      passwordSignup: document.getElementById("passwordSignup").value,
    };

    // Send data to the backend
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message); // Show a success or error message
        signupForm.reset(); // Clear the form
      })
      .catch((error) => console.error("Error:", error));
  });
});
