// Väntar tills hela DOM-innehållet är laddat innan scriptet körs
document.addEventListener("DOMContentLoaded", function () {

  // Hämtar alla knappar med klassen "option-button" (ämnesvalsknapparna)
  const startQuizButtons = document.querySelectorAll(".option-button");

  // Loopar igenom varje knapp och lägger till en klick-händelse på dem
  startQuizButtons.forEach((button) => {

    // Lägger till en "click" event listener för varje knapp
    button.addEventListener("click", function () {

      // Hittar den närmaste föräldern med klassen "card" och hämtar dess "data-subject"-attribut
      const subject = this.closest(".card").getAttribute("data-subject");

      // Sparar det valda ämnet i webbläsarens localStorage under nyckeln "selectedSubject"
      localStorage.setItem("selectedSubject", subject);

      // Navigerar användaren till sidan "preparingPage.html" (den sida som förbereder quizet)
      window.location.href = "./pages/PreparingPage/preparingPage.html";
    });
  });
});
