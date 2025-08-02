document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      // Close any open answers
      const currentlyActive = document.querySelector(".faq-question.active");
      if (currentlyActive && currentlyActive !== question) {
        currentlyActive.classList.remove("active");
        currentlyActive.nextElementSibling.style.display = "none";
      }

      // Toggle clicked question
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (question.classList.contains("active")) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
