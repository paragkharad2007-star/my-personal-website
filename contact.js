document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.style.color = "#fff";
  status.textContent = "Sending...";

  // Simulate sending to backend
  setTimeout(() => {
    status.style.color = "#00ffb3";
    status.textContent = "Message sent successfully! 🚀";
    this.reset();
  }, 1500);
});
