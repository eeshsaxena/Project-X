document
  .getElementById("contact-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.getElementById("contact");
    target.scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("blog-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.getElementById("blog");
    target.scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("home-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.getElementById("home");
    target.scrollIntoView({ behavior: "smooth" });
  });
