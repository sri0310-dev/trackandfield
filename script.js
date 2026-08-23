const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Show success message
  message.style.display = "block";

  // Reset form
  form.reset();

  // Scroll to success message
  message.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
