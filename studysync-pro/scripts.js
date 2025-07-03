// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("planForm");
  const output = document.getElementById("scheduleOutput");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      output.style.display = "block";
      form.style.display = "none";
    });
  }
});
