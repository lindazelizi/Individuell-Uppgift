const selectedSubject = localStorage.getItem('selectedSubject');
const resultScore = localStorage.getItem('result-Score');
const quizLength = localStorage.getItem('quiz-length');
const totalTime = localStorage.getItem('total-Time');
const bestTime = localStorage.getItem('best-Time');


const result = document.getElementById("results");

result.innerHTML = `
  <p>Ämne: ${selectedSubject}</p>
  <p>Poäng: ${resultScore}/${quizLength}</p>
  <p>Total tid: ${totalTime} sekunder</p>  <!-- Ny rad som visar den totala tiden -->
  <p>Bästa tid: ${bestTime} sekunder</p>   <!-- Visar den bästa tiden från tidigare sessioner -->
`;

console.log("Quiz resultat visas");

document.getElementById('restart-btn').addEventListener('click', function () {
  window.location.href = '../QuizCard/quizcard.html';
});

document.getElementById('start-btn').addEventListener('click', function () {
  window.location.href = '../../index.html';
});

