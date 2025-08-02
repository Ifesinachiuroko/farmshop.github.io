document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const showSignInBtn = document.getElementById("showSignIn");
  const showSignUpBtn = document.getElementById("showSignUp");

  // Toggle between Sign In and Sign Up
  showSignInBtn.addEventListener("click", function () {
    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
    showSignInBtn.classList.add("active");
    showSignUpBtn.classList.remove("active");
  });

  showSignUpBtn.addEventListener("click", function () {
    signUpForm.classList.remove("hidden");
    signInForm.classList.add("hidden");
    showSignUpBtn.classList.add("active");
    showSignInBtn.classList.remove("active");
  });

  // Handle Sign In Form Submit
  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Sign In successful!");
  });

  // Handle Sign Up Form Submit
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Account created successfully!");
  });
});
