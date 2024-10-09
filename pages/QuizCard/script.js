
// navigerar till resultat sidan


document.addEventListener("DOMContentLoaded", function () {
    const startQuizButtons = document.querySelectorAll(".quizResult");
  
    startQuizButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const ResultTimer = this.closest(".quizResult").getAttribute("data-subject");
        localStorage.setItem("ResultTimer", ResultTimer);
        // skapa en timer för hela quizen här när användaren klickat på start

        window.location.href = "../././QuizResult/quizresult.html";
      });
    });
  });


