

// Skriver ut det valda ämnet

const option = localStorage.getItem("selectedSubject");

const choosenOption = document.getElementById("choosenOption")
console.log(choosenOption)

choosenOption.textContent = option


// navigerar till ny sida


document.addEventListener("DOMContentLoaded", function () {
    const startQuizButtons = document.querySelectorAll(".start-button");
  
    startQuizButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const quizTimer = this.closest(".startBtn-Container").getAttribute("data-subject");
        localStorage.setItem("QuizTimer", quizTimer);
        // skapa en timer för hela quizen här när användaren klickat på start

        window.location.href = "../././QuizCard/quizcard.html";
      });
    });
  });





