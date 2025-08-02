document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sellForm");
  const preview = document.getElementById("preview");
  const previewImage = document.getElementById("previewImage");
  const previewTitle = document.getElementById("previewTitle");
  const previewPrice = document.getElementById("previewPrice");
  const previewDescription = document.getElementById("previewDescription");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;

    // Update preview section
    previewTitle.textContent = title;
    previewPrice.textContent = `${price} USDT`;
    previewImage.src = image;
    previewDescription.textContent = description;

    preview.classList.remove("hidden");

    // You could add code here to send the data to a backend.
    console.log({ title, price, image, description });
    alert("Item listed successfully (demo only).");
  });
});
