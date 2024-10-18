// Skriver ut det valda ämnet

const option = localStorage.getItem("selectedSubject");

const choosenOption = document.getElementById("choosenOption")
// console.log(choosenOption)

choosenOption.textContent = option


// navigerar till ny sida

document.addEventListener("DOMContentLoaded", function () {
  const startQuizButtons = document.querySelectorAll(".start-button");

  startQuizButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quizTimer = this.closest(".startBtn-Container").getAttribute("data-subject");
      localStorage.setItem("QuizTimer", quizTimer);
      // skapa en timer för hela quizen här när användaren klickat på start
      // console.log(quizTimer);
      // countDownTimer();
      window.location.href = "../././QuizCard/quizcard.html";
    });
  });
});


if (option === "hemkunskap") {
  // visa hemkunskapsbild

  const imgSubject = document.getElementById("img_subject")

  imgSubject.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznc3skNxOJf1jqzsHD9ylhFFR7t6-V-0hqg&s"
}
else if (option === "ordspråk") {
  // visa bild på orsdpråksbild

  const imgSubject = document.getElementById("img_subject")

  imgSubject.src = "https://befolkning.hallandsslaktforskare.se/wp-content/uploads/gamla-ordsprak-och-uttryck-640x320.jpg"
}


