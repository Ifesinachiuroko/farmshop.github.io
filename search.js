function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.getElementsByClassName("product-card");

  for (let i = 0; i < products.length; i++) {
    let title = products[i].getElementsByClassName("product-title")[0].innerText.toLowerCase();
    if (title.includes(input)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Buy function not implemented yet.");
    });
  });
});
