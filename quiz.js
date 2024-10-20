
document.addEventListener("DOMContentLoaded", function () {
  const startQuizButtons = document.querySelectorAll(".option-button");
  startQuizButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const subject = this.closest(".card").getAttribute("data-subject");
      localStorage.setItem("selectedSubject", subject);
      window.location.href = "./pages/PreparingPage/preparingPage.html";
    });
  });
});
