var questions = [];
var questions_array = [
  {
    hard: [
      {
        name: "question-25",
        value: "Qual é a soma dos n primeiros números naturais?",
        options: ["n(n+1)/2", "n(n-1)/2", "n(n+1)", "n(n-1)"],
        correctAnswer: "n(n+1)/2",
      },
      {
        name: "question-26",
        value: "Qual é a derivada de x³?",
        options: ["3x", "2x", "4x", "x²"],
        correctAnswer: "3x²",
      },
      {
        name: "question-27",
        value: "Qual é o valor de ln(e)?",
        options: ["0", "1", "e", "π"],
        correctAnswer: "1",
      },
      {
        name: "question-28",
        value: "Quanto é arccos(0)?",
        options: ["0", "1", "π/2", "π"],
        correctAnswer: "π/2",
      },
      {
        name: "question-29",
        value: "Qual é a soma dos ângulos internos de um polígono com n lados?",
        options: ["(n-2)180°", "n180°", "(n+2)180°", "(n-1)180°"],
        correctAnswer: "(n-2)180°",
      },
      {
        name: "question-30",
        value: "Qual é a integral de x²?",
        options: ["x", "2x", "x³/3", "x⁴/4"],
        correctAnswer: "x³/3",
      },
      {
        name: "question-31",
        value: "Qual é a derivada de ln(x)?",
        options: ["1/x", "x", "x²", "e^x"],
        correctAnswer: "1/x",
      },
      {
        name: "question-32",
        value: "Quanto é tan(π/4)?",
        options: ["0", "1", "√2/2", "1/√2"],
        correctAnswer: "1",
      },
    ],
    normal: [
      {
        name: "question-17",
        value: "Qual é o resultado de 3²?",
        options: ["6", "9", "12", "15"],
        correctAnswer: "9",
      },
      {
        name: "question-18",
        value: "Quanto é a raiz cúbica de 64?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
      },
      {
        name: "question-19",
        value: "Qual é o resultado de 2+2x2?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "6",
      },
      {
        name: "question-20",
        value: "Quanto é 7-3x2?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
      },
      {
        name: "question-21",
        value: "Quanto é 20/4?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
      },
      {
        name: "question-22",
        value: "Qual é a área de um retângulo com lados de comprimento 8 e 5?",
        options: ["32", "35", "40", "45"],
        correctAnswer: "40",
      },
      {
        name: "question-23",
        value: "Quanto é log₁₀(100)?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        name: "question-24",
        value: "Quanto é sen(45°)?",
        options: ["0", "0.5", "1", "√2/2"],
        correctAnswer: "√2/2",
      },
    ],
    easy: [
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
    ],
  },
];

var currentQuestionIndex = 0;
var correctAnswerCount = 0;
var selectButton;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var usedQuestionIndices = []; // Array para armazenar os índices das perguntas já utilizadas

var currentQuestion; // Variável global para armazenar a pergunta atual

function showQuestion(difficulty) {
  if (!difficulty) return;

  questions = questions_array.find((item) => item.hasOwnProperty(difficulty))[
    difficulty
  ];

  // Se todas as perguntas já foram usadas, reinicie a matriz de índices utilizados
  if (usedQuestionIndices.length === questions.length) {
    usedQuestionIndices = [];
  }

  var availableQuestions = questions.filter(
    (_, index) => !usedQuestionIndices.includes(index)
  );

  // Verifique se todas as perguntas já foram utilizadas
  if (availableQuestions.length === 0) {
    // Se sim, reinicie os índices utilizados
    usedQuestionIndices = [];
    availableQuestions = questions.slice(); // Copie todas as perguntas novamente
  }

  var currentQuestionIndex = Math.floor(
    Math.random() * availableQuestions.length
  );
  currentQuestion = availableQuestions[currentQuestionIndex]; // Armazene a pergunta atual globalmente

  var perguntaElement = document.querySelector(".perguntas h2");
  perguntaElement.textContent = currentQuestion.value;

  // Embaralhe as opções de resposta
  var shuffledOptions = shuffleArray(currentQuestion.options);

  console.log("Opções de resposta embaralhadas:", shuffledOptions);
  console.log("Resposta correta:", currentQuestion.correctAnswer);

  var buttons = document.querySelectorAll(".button-question");
  buttons.forEach(function (button, index) {
    button.textContent = shuffledOptions[index];
    button.style.backgroundColor = "";
  });

  // Remova o índice da pergunta utilizada
  var indexOfUsedQuestion = questions.indexOf(currentQuestion);
  usedQuestionIndices.push(indexOfUsedQuestion);
}

function triggerConfetti() {
  var confettiSettings = { target: "my-canvas" };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

function displayPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  triggerConfetti();

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

  triggerConfetti();

  setTimeout(() => {
    popup.classList.remove("hidden-end");
    triggerConfetti();
  }, 850);
}

function restartQuiz() {
  currentQuestionIndex = 0;

  var restartButton = document.getElementById("restartButton");
  restartButton.style.display = "none";

  correctAnswerCount = 0;

  var popup = document.getElementById("popup-end");
  popup.classList.add("hidden-end");

  var start = document.getElementById("start");
  start.style.display = "flex";

  var questionsDisplay = document.getElementById("main-class");
  questionsDisplay.classList.add("hidden-question");
}

function chooseDifficulty(difficulty) {
  var startChoice = document.getElementById("start");
  startChoice.style.display = "none";

  var questionsDisplay = document.getElementById("main-class");
  questionsDisplay.classList.remove("hidden-question");

  selectButton = difficulty;

  showQuestion(difficulty);
}

function clickedButton() {
  var botaoClicado = event.target;

  var respostaCorreta = currentQuestion.correctAnswer; // Obter a resposta correta da pergunta atual
  var respostaSelecionada = botaoClicado.textContent.trim(); // Remover espaços em branco

  console.log("Resposta selecionada:", respostaSelecionada);
  console.log("Resposta correta:", respostaCorreta);

  // Obter as opções de resposta originais antes do embaralhamento
  var opcoesOriginais = currentQuestion.options;

  // Verificar se a resposta selecionada corresponde a alguma das opções originais
  if (opcoesOriginais.includes(respostaSelecionada)) {
    if (respostaSelecionada === respostaCorreta) {
      botaoClicado.style.backgroundColor = "green";
      displayPopup();
      correctAnswerCount++;
    } else {
      botaoClicado.style.backgroundColor = "red";
      displayPopupError();
    }
  } else {
    console.log("Resposta selecionada inválida.");
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(selectButton);
  } else {
    displayPopupEnd();
    var restartButton = document.getElementById("restartButton");
    restartButton.style.display = "block";

    var message = document.getElementById("correctAnswersMessage");
    message.textContent = `Você acertou ${correctAnswerCount}/${questions.length}!`;
  }
}

showQuestion();
