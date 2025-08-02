document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.querySelector(".join-discord-btn");

  joinBtn.addEventListener("click", (e) => {
    const confirmJoin = confirm("You are about to join our Discord server. Continue?");
    if (!confirmJoin) {
      e.preventDefault(); // Stop redirect
    }
  });
});
