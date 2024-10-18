// Retrieve selected subject, score, quiz length, and total time from localStorage
const selectedSubject = localStorage.getItem('selectedSubject');
const resultScore = localStorage.getItem('result-Score');
const quizLength = localStorage.getItem('quiz-length');
const totalTime = localStorage.getItem('total-Time'); // Hämtar total tid från localStorage
const bestTime = localStorage.getItem('best-Time'); // Hämta bästa tiden

// Referens till DOM-elementet där vi ska visa resultatet
const result = document.getElementById("results");

// Visa resultat, poäng och tid på sidan utan att skriva över knapparna
result.innerHTML = `
  <p>Ämne: ${selectedSubject}</p>
  <p>Poäng: ${resultScore}/${quizLength}</p>
  <p>Total tid: ${totalTime} sekunder</p>  <!-- Ny rad som visar den totala tiden -->
  <p>Bästa tid: ${bestTime} sekunder</p>   <!-- Visar den bästa tiden från tidigare sessioner -->
`;

console.log("Quiz resultat visas");

// Hantera "Spela igen"-knappen
document.getElementById('restart-btn').addEventListener('click', function () {
  window.location.href = '../QuizCard/quizcard.html'; // Exempel: skicka användaren tillbaka till quiz-sidan
});

// Hantera "Gå tillbaka till startsidan"-knappen
document.getElementById('start-btn').addEventListener('click', function () {
  window.location.href = '../../index.html'; // Exempel: skicka användaren tillbaka till startsidan
});

