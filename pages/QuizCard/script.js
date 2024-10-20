document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const questionContainer = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const questionImage = document.getElementById('question-image');
  const timerElement = document.getElementById('timer');
  const startCountDown = document.getElementById('startCountDown');

  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let totalTime = 0;
  let questionTimer;
  let startTime;
  let countdownTimer;

  const quiz = {
    ordspråk: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvVl2RgC8fBPSn3U4zCup-c_7VlWXM2tZtA&s",
        question: 'Lika barn leka ""',
        answers: [
          { option: 'tillsammans', correct: false },
          { option: 'bäst', correct: true },
          { option: 'bra', correct: false },
          { option: 'roligt', correct: false },
          { option: 'dåligt', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJOKOEO0cDvfWo3TpnKtzyJI9XiZxRHIyjMHZZU0cFbSzBFwCLa4s8g1U0tgp8H3KLrM&usqp=CAU",
        question: 'Ropa inte "" förrän du är över bäcken',
        answers: [
          { option: 'ja', correct: false },
          { option: 'hjälp', correct: false },
          { option: 'hej', correct: true },
          { option: 'ojsan', correct: false },
          { option: 'högt', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zfQ-LkoLLrbInZ2LPlEOGU43gsFovX0nrg&s",
        question: 'Den som spar han ""',
        answers: [
          { option: 'har', correct: true },
          { option: 'är', correct: false },
          { option: 'kan va rik', correct: false },
          { option: 'missar', correct: false },
          { option: 'köper', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bqXzh72q6W6_GHDyMFFcB7BNfdbEo3JCpg&s",
        question: 'Den som ger sig in i leken, får leken ""',
        answers: [
          { option: 'tåla', correct: true },
          { option: 'leka', correct: false },
          { option: 'vara med', correct: false },
          { option: 'ge', correct: false },
          { option: 'också', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bVt-4GO7NCW8F9mu79MY-frEbaPiWU_ZGA&s",
        question: 'I mörker är alla "" grå',
        answers: [
          { option: 'männsikor', correct: false },
          { option: 'katter', correct: true },
          { option: 'hundar', correct: false },
          { option: 'skuggor', correct: false },
          { option: 'råttor', correct: false }
        ]
      }
    ],
    hemkunskap: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdLXKY-ppQx7ayUiQpMeyAzjjEi9z6lZ00Q&s",
        question: 'Vilken av följande är ett viktigt verktyg i köket?',
        answers: [
          { option: 'Tejp', correct: false },
          { option: 'Linjal', correct: false },
          { option: 'Hatt', correct: false },
          { option: 'Kniv', correct: true },
          { option: 'Gem', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbrIV9zZhOscoOrOknuxi9f5QiUg3hNMR5AtrSeO8rO7wm2MrYaFNr3mbet82FJXiI70&usqp=CAU",
        question: 'Vad betyder ”livsmedelssäkerhet”?',
        answers: [
          { option: 'Att maten är god', correct: false },
          { option: 'Att maten är billig', correct: false },
          { option: 'Att maten är säker att äta', correct: true },
          { option: 'Att maten lever', correct: false },
          { option: 'Att maten behöver ätas', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1liAAfMGBkPRQmiA8V2KWD6Ua7Tn_E_-nB7o6QzlJ1R9e2i6h2DaXnubVbi9zJvxwRU&usqp=CAU",
        question: 'Vilken typ av måltid är bäst för att få i sig tillräckligt med näring?',
        answers: [
          { option: 'En balanserad måltid', correct: true },
          { option: 'Enbart godis', correct: false },
          { option: 'Snabb mat', correct: false },
          { option: 'Långsam mat', correct: false },
          { option: 'Rolig mat', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oCGEtT98h8bneX_rwpj9awKpoln9SfeR9Q&s",
        question: 'Vad är en viktig del av hygien i köket?',
        answers: [
          { option: 'Att tvätta händerna innan man lagar mat', correct: true },
          { option: 'Att hålla fönstret öppet', correct: false },
          { option: 'Att använda en gammal trasa', correct: false },
          { option: 'Att hälla massa vatten överallt', correct: false },
          { option: 'Att lägga disk överallt', correct: false }
        ]
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWm5nIGSehYfUc53u-bbhkkJKBqOtmtc3DHVMfPSx_zPQaNR7tLxEDcrDl5V_v1kAyN0&usqp=CAU",
        question: 'Vad innebär att planera sin ekonomi?',
        answers: [
          { option: 'Att spendera så mycket som möjligt', correct: false },
          { option: 'Att inte hålla koll på sina utgifter', correct: false },
          { option: 'Att köpa vad man vill', correct: false },
          { option: 'Att ta pengar från någon annan', correct: false },
          { option: 'Att veta hur mycket pengar man har och hur man ska använda dem', correct: true }
        ]
      },
    ]
  };

  const selectedSubject = localStorage.getItem('selectedSubject');

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  function startQuiz() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    startCountdown();
  }

  function startCountdown() {
    let countdownTime = 3;
    startCountDown.textContent = countdownTime;

    countdownTimer = setInterval(() => {
      countdownTime--;
      startCountDown.textContent = countdownTime;

      if (countdownTime <= 0) {
        clearInterval(countdownTimer);
        startCountDown.textContent = "";
        currentQuiz = shuffle([...quiz[selectedSubject] || quiz.ordspråk]);
        currentQuestionIndex = 0;
        score = 0;
        totalTime = 0;
        startTime = Date.now();
        setNextQuestion();
      }
    }, 1000);
  }

  function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < currentQuiz.length) {
      showQuestion(currentQuiz[currentQuestionIndex]);
      startQuestionTimer();
    } else {
      showResults();
    }
  }

  function showQuestion(questionObj) {
    questionElement.textContent = questionObj.question;
    questionImage.src = questionObj.image;
    questionImage.classList.remove("hide");

    questionObj.answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer.option;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextBtn.style.display = 'none';
    clearInterval(questionTimer);
    timerElement.textContent = '';
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (correct) {
      e.target.style.backgroundColor = 'green';
      score++;
    } else {
      e.target.style.backgroundColor = 'red';
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
    });
    nextBtn.style.display = 'inline-block';
    clearInterval(questionTimer);
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  function startQuestionTimer() {
    let timeLeft = 10;
    timerElement.textContent = `Tid kvar: ${timeLeft}s`;

    questionTimer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Tid kvar: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(questionTimer);
        markAnswerAsWrong();
      }
    }, 1000);
  }

  function markAnswerAsWrong() {
    Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
    });
    nextBtn.style.display = 'inline-block';
  }

  function showResults() {
    const endTime = Date.now();
    totalTime = (endTime - startTime) / 1000;
    localStorage.setItem("result-Score", score);
    localStorage.setItem("quiz-length", currentQuiz.length);
    localStorage.setItem("total-Time", totalTime);

    const bestTime = localStorage.getItem('best-Time');
    if (!bestTime || totalTime < bestTime) {
      localStorage.setItem('best-Time', totalTime);
    }

    window.location.href = "../././QuizResult/quizresult.html";
  }
});
