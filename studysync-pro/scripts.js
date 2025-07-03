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
// Quiz form simulation
const quizForm = document.getElementById("quizForm");
const quizOutput = document.getElementById("quizOutput");

if (quizForm) {
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    quizForm.style.display = "none";
    quizOutput.style.display = "block";
  });
}
// Concept Explainer Simulation
const explainForm = document.getElementById("explainForm");
const explanationOutput = document.getElementById("explanationOutput");

if (explainForm) {
  explainForm.addEventListener("submit", function (e) {
    e.preventDefault();
    explainForm.style.display = "none";
    explanationOutput.style.display = "block";
  });
}
