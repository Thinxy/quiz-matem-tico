var questions = [
  {
    name: "question-1",
    value: "Quanto é 2+2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    name: "question-2",
    value: "Quanto é 5*3?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "15",
  },
  {
    name: "question-3",
    value: "Quanto é 10/2?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "5",
  },
  {
    name: "question-4",
    value: "Quanto é 8-3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
  },
  {
    name: "question-5",
    value: "Quanto é 7*7?",
    options: ["42", "49", "56", "63"],
    correctAnswer: "49",
  },
  {
    name: "question-6",
    value: "Quanto é 12/4?",
    options: ["2", "3", "4", "6"],
    correctAnswer: "3",
  },
  {
    name: "question-7",
    value: "Quanto é 9*9?",
    options: ["72", "81", "90", "99"],
    correctAnswer: "81",
  },
  {
    name: "question-8",
    value: "Quanto é 15/3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
  },
];

var currentQuestionIndex = 0;
var correctAnswerCount = 0;

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var perguntaElement = document.querySelector(".perguntas h2");
  perguntaElement.textContent = currentQuestion.value;

  var buttons = document.querySelectorAll(".button-question");
  buttons.forEach(function (button, index) {
    button.textContent = currentQuestion.options[index];
    button.style.backgroundColor = "";
  });
}

function displayPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  setTimeout(function () {
    popup.classList.add("hidden");
  }, 750);
}

function displayPopupError() {
  var popup = document.getElementById("popup-e");
  popup.classList.remove("hidden-e");

  setTimeout(function () {
    popup.classList.add("hidden-e");
  }, 750);
}

function displayPopupEnd() {
  var popup = document.getElementById("popup-end");

  setTimeout(() => {
    popup.classList.remove("hidden-end");
  }, 850);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  showQuestion();
  var restartButton = document.getElementById("restartButton");
  restartButton.style.display = "none";

  correctAnswerCount = 0;

  var popup = document.getElementById("popup-end");
  popup.classList.add("hidden-end");
}

function clickedButton() {
  var botaoClicado = event.target;

  var respostaCorreta = questions[currentQuestionIndex].correctAnswer;
  var respostaSelecionada = botaoClicado.textContent;

  if (respostaSelecionada === respostaCorreta) {
    botaoClicado.style.backgroundColor = "green";
    displayPopup();
    currentQuestionIndex++;
    correctAnswerCount++;

    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        showQuestion();
      }, 750);
    } else {
      displayPopupEnd();
      var restartButton = document.getElementById("restartButton");
      restartButton.style.display = "block";

      var message = document.getElementById("correctAnswersMessage");

      message.textContent = `Você acertou ${correctAnswerCount}/${questions.length}!`;
    }
  } else {
    botaoClicado.style.backgroundColor = "red";
    displayPopupError();

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        showQuestion();
      }, 750);
    } else {
      displayPopupEnd();
      var restartButton = document.getElementById("restartButton");
      restartButton.style.display = "block";

      var message = document.getElementById("correctAnswersMessage");

      message.textContent = `Você acertou ${correctAnswerCount}/${questions.length}!`;
    }
  }
}

showQuestion();
