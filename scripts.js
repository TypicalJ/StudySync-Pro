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
document.addEventListener('DOMContentLoaded', () => {
  const studyForm = document.getElementById('study-form');
  const outputSection = document.getElementById('study-plan-output');

  if (studyForm) {
    studyForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const coursesInput = document.getElementById('courses').value;
      const hoursInput = parseInt(document.getElementById('hours').value);

      const courses = coursesInput.split(',').map(course => course.trim()).filter(Boolean);
      const hoursPerCourse = Math.floor(hoursInput / courses.length);
      const extraHours = hoursInput % courses.length;

      let planHTML = `<h3>Your Personalized Study Plan:</h3><ul>`;
      courses.forEach((course, index) => {
        const totalHours = hoursPerCourse + (index < extraHours ? 1 : 0);
        planHTML += `<li><strong>${course}:</strong> ${totalHours} hour(s) per week</li>`;
      });
      planHTML += `</ul><p>Tip: Use these time blocks consistently for better retention!</p>`;

      outputSection.innerHTML = planHTML;
    });
  }
});
  const quizForm = document.getElementById('quiz-form');
  const quizOutput = document.getElementById('quiz-output');

  if (quizForm) {
    quizForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const notes = document.getElementById('notes').value.trim();

      if (notes.length === 0) return;

      // Mock quiz generator — not real AI, but simulates one
      const sampleQuestions = [
        `What is the main idea of the topic?`,
        `List two important facts from your notes.`,
        `Explain a key process or definition mentioned.`,
      ];

      let quizHTML = `<h3>Your Practice Questions:</h3><ol>`;
      sampleQuestions.forEach(q => {
        quizHTML += `<li>${q}</li>`;
      });
      quizHTML += `</ol><p><em>Tip:</em> Try writing answers based on what you remember!</p>`;

      quizOutput.innerHTML = quizHTML;
    });
  }
  const explainForm = document.getElementById('explain-form');
  const explanationOutput = document.getElementById('explanation-output');

  if (explainForm) {
    explainForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const concept = document.getElementById('concept').value.trim().toLowerCase();

      // Basic mock "AI" explanations for a few common topics
      const explanations = {
        mitosis: "Mitosis is how cells divide to make exact copies of themselves. It's used for growth and repair.",
        photosynthesis: "Photosynthesis is how plants make their food using sunlight, water, and carbon dioxide.",
        gravity: "Gravity is the force that pulls objects toward each other. It's why things fall to the ground.",
        osmosis: "Osmosis is the movement of water through a membrane from low to high solute concentration.",
      };

      let result = explanations[concept] || "Sorry, I couldn't find a simple explanation for that. Try a different topic or rephrase it.";

      explanationOutput.innerHTML = `
        <h3>Simple Explanation:</h3>
        <p>${result}</p>
      `;
    });
  }
  const flashcardForm = document.getElementById('flashcard-form');
  const flashcardContainer = document.getElementById('flashcard-container');

  if (flashcardForm) {
    flashcardForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const front = document.getElementById('front').value.trim();
      const back = document.getElementById('back').value.trim();

      if (!front || !back) return;

      const card = document.createElement('div');
      card.className = 'flashcard';
      card.textContent = front;
      card.dataset.front = front;
      card.dataset.back = back;
      card.dataset.flipped = 'false';

      card.addEventListener('click', () => {
        const isFlipped = card.dataset.flipped === 'true';
        card.textContent = isFlipped ? card.dataset.front : card.dataset.back;
        card.dataset.flipped = isFlipped ? 'false' : 'true';
      });

      flashcardContainer.appendChild(card);
      flashcardForm.reset();
    });
  }
