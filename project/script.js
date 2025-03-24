//client side
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