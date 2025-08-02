document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate sending message (no backend here)
    successMsg.style.display = "block";

    // Clear form fields
    contactForm.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
});
