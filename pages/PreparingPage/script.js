const option = localStorage.getItem("selectedSubject");

const choosenOption = document.getElementById("choosenOption")


choosenOption.textContent = option


document.addEventListener("DOMContentLoaded", function () {
  const startQuizButtons = document.querySelectorAll(".start-button");

  startQuizButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quizTimer = this.closest(".startBtn-Container").getAttribute("data-subject");
      localStorage.setItem("QuizTimer", quizTimer);
      
      window.location.href = "../././QuizCard/quizcard.html";
    });
  });
});


if (option === "hemkunskap") {
 

  const imgSubject = document.getElementById("img_subject")

  imgSubject.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznc3skNxOJf1jqzsHD9ylhFFR7t6-V-0hqg&s"
}
else if (option === "ordspråk") {
 

  const imgSubject = document.getElementById("img_subject")

  imgSubject.src = "https://befolkning.hallandsslaktforskare.se/wp-content/uploads/gamla-ordsprak-och-uttryck-640x320.jpg"
}


