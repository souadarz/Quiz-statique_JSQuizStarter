const data = [
  //1ere categorie js
  {
    categorie: "JavaScript",
    questions: [
      {
        type: "multiple",
        question: "Quels sont les types de données primitifs en JavaScript ?",
        reponses: [
          "String",
          "Number",
          "Boolean",
          "Object",
          "Undefined",
          "Symbol",
        ],
        reponse_correct: [0, 1, 2, 4, 5],
      },
      {
        type: "single",
        question:
          "Quelle méthode transforme une chaîne JSON en objet JavaScript ?",
        reponses: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.toObject()",
          "parse.JSON()",
        ],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question: "Que signifie NaN en JavaScript ?",
        reponses: [
          "Not a Node",
          "Not a Number",
          "New array Number",
          "No assigned Name",
        ],
        reponse_correct: [1],
      },
      {
        type: "single",
        question: "Quelle est la portée d'une variable déclarée avec let ?",
        reponses: ["Globale", "Bloc", "Fonction", "Module"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question: "Quels mots-clés permettent de déclarer une variable ?",
        reponses: ["var", "const", "let", "define"],
        reponse_correct: [0, 1, 2],
      },
      {
        type: "single",
        question:
          "Comment écrire un commentaire sur une seule ligne en JavaScript ?",
        reponses: ["<!-- -->", "//", "/* */", "#"],
        reponse_correct: [1],
      },
      {
        type: "single",
        question: "Quel est le résultat de typeof null ?",
        reponses: ["null", "object", "undefined", "string"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question:
          "Quelles méthodes sont utilisées pour itérer sur un tableau ?",
        reponses: ["forEach", "map", "filter", "reduce", "loop()"],
        reponse_correct: [0, 1, 2, 3],
      },
      {
        type: "single",
        question:
          "Quelle structure permet de gérer les promesses plus facilement ?",
        reponses: ["Callbacks", "Async/Await", "EventEmitter", "Interval"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question:
          "Quelles opérations sont considérées comme falsy en JavaScript ?",
        reponses: ["0", "''", "null", "undefined", "NaN", "false", "[]"],
        reponse_correct: [0, 1, 2, 3, 4, 5],
      },
    ],
  },

  // 2 eme categorie nodejs
  {
    categorie: "Node.js",
    questions: [
      {
        type: "single",
        question: "Node.js est principalement utilisé pour :",
        reponses: [
          "Exécuter du JavaScript côté serveur",
          "Créer des sites statiques uniquement",
          "Compiler du code C++",
          "Remplacer le navigateur",
        ],
        reponse_correct: [0],
      },
      {
        type: "single",
        question: "Quel module intégré permet de créer un serveur HTTP ?",
        reponses: ["fs", "http", "events", "net"],
        reponse_correct: [1],
      },
      {
        type: "single",
        question:
          "Quel gestionnaire de paquets est installé avec Node.js par défaut ?",
        reponses: ["yarn", "npm", "pnpm", "composer"],
        reponse_correct: [1],
      },
      {
        type: "single",
        question:
          "Quelle méthode est utilisée pour lire un fichier en Node.js ?",
        reponses: ["fs.read()", "fs.readFile()", "fs.load()", "file.open()"],
        reponse_correct: [1],
      },
      {
        type: "single",
        question: "Que permet d'utiliser 'require' en Node.js ?",
        reponses: [
          "Importer un module",
          "Créer un serveur",
          "Compiler le code",
          "Définir une classe",
        ],
        reponse_correct: [0],
      },
      {
        type: "multiple",
        question: "Quels objets globaux sont disponibles dans Node.js ?",
        reponses: ["__dirname", "process", "window", "module", "exports"],
        reponse_correct: [0, 1, 3, 4],
      },
      {
        type: "single",
        question:
          "Quel est le fichier d'entrée par défaut d'une application Node.js ?",
        reponses: ["server.js", "index.js", "main.js", "app.js"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question: "Quels modules intégrés permettent de gérer les fichiers ?",
        reponses: ["fs", "path", "http", "crypto"],
        reponse_correct: [0, 1],
      },
      {
        type: "single",
        question:
          "Quel mot-clé permet de déclarer un module ES dans Node.js (ESM) ?",
        reponses: ["require", "export/import", "define", "module.exports"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question: "Quels frameworks peuvent être utilisés avec Node.js ?",
        reponses: ["Express", "NestJS", "Next.js", "Laravel"],
        reponse_correct: [0, 1, 2],
      },
    ],
  },

  //3eme catégorie : Bases de données
  {
    categorie: "Bases de données",
    questions: [
      {
        type: "single",
        question: "Quel type de base de données est MongoDB ?",
        reponses: [
          "Base relationnelle",
          "Base orientée documents",
          "Base en mémoire",
          "Base orientée graphes",
        ],
        reponse_correct: [1],
      },
      {
        type: "single",
        question:
          "Quel langage est utilisé pour interroger une base relationnelle comme MySQL ou PostgreSQL ?",
        reponses: ["NoSQL", "GraphQL", "SQL", "JSON"],
        reponse_correct: [2],
      },
      {
        type: "single",
        question:
          "Quelle commande permet de lister toutes les bases de données dans MySQL ?",
        reponses: [
          "SHOW DATABASES;",
          "LIST DATABASES;",
          "SELECT DATABASES;",
          "GET DATABASES;",
        ],
        reponse_correct: [0],
      },
      {
        type: "single",
        question:
          "Dans une base relationnelle, comment appelle-t-on une ligne d'une table ?",
        reponses: ["Champ", "Colonne", "Enregistrement", "Clé"],
        reponse_correct: [2],
      },
      {
        type: "single",
        question: "Quel SGBD est orienté documents ?",
        reponses: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
        reponse_correct: [2],
      },
      {
        type: "multiple",
        question: "Quels SGBD sont relationnels ?",
        reponses: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        reponse_correct: [0, 1, 3],
      },
      {
        type: "multiple",
        question: "Quels SGBD supportent le langage SQL ?",
        reponses: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
        reponse_correct: [0, 1, 2],
      },
      {
        type: "single",
        question: "Quel est le format des documents stockés dans MongoDB ?",
        reponses: ["XML", "BSON", "CSV", "SQL"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question: "Quelles sont des opérations CRUD ?",
        reponses: ["Create", "Read", "Update", "Delete", "Drop"],
        reponse_correct: [0, 1, 2, 3],
      },
      {
        type: "single",
        question:
          "Quel moteur MySQL est le plus utilisé pour les transactions ?",
        reponses: ["InnoDB", "MyISAM", "Memory", "CSV"],
        reponse_correct: [0],
      },
    ],
  },
];

const usernameInput = document.getElementById("usernameInput");
const categories = document.querySelectorAll(".cat");
const errorMsg = document.getElementById("errorMsg");
const questions = document.getElementById("questionReponse");
const start = document.getElementById("startTest");
const question = document.getElementById("question");
const reponses = document.getElementById("reponses");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const time = document.getElementById("time");
const username = document.getElementById("username");
const currentQuestion = document.getElementById("currentQuestion");
const nbrQuestions = document.getElementById("nbrQuestions");
const result = document.getElementById("result");
const scoreFinale = document.getElementById("scoreFinale");
const total = document.getElementById("totalQuestions");
const feedback = document.querySelector("#feedBack");
const finalResult = document.querySelector("#finalResult");
const recommancerBtn = document.querySelector("#recommancerBtn");
let currentIndex = 0;
let selectedQuestions = [];
let timerQuestion;
let score = 0;
let quizHistorique = [];
let selectedCategory = "";

categories.forEach((cat) => {
  cat.addEventListener("click", () => {
    const usernameValue = usernameInput.value.trim();

    if (usernameValue === "") {
      errorMsg.style.display = "block";
    } else {
      username.textContent = usernameValue;
      errorMsg.style.display = "none";
      questions.classList.add("active");
      start.classList.remove("active");
      const selectedCat = cat.textContent.trim();
      selectedCategory = selectedCat;
      const selectedData = data.find((d) => d.categorie === selectedCat);
      selectedQuestions = selectedData.questions;
      nbrQuestions.textContent = selectedQuestions.length;
      total.textContent = selectedQuestions.length;
      quizHistorique.push({
        username: usernameValue,
        categorie: selectedCategory,
        reponses: [],
        date: new Date().toLocaleString(),
        score: score,
      });
      if (selectedData) {
        showQuestions(selectedQuestions, currentIndex);
      }
    }
  });
});

function showQuestions(questionArray, index) {
  question.innerHTML = "";
  reponses.innerHTML = "";

  const qest = questionArray[index];
  currentQuestion.textContent = index + 1;
  question.textContent = qest.question;
  qest.reponses.forEach((rep, i) => {
    const input = document.createElement("input");
    input.value = rep;
    input.classList.add("ResInput");
    input.id = `answer-${i}`;
    input.setAttribute("data-resIndex", i);
    input.type = questionArray[index].type == "multiple" ? "checkbox" : "radio";

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = rep;
    label.classList.add("answer");
    input.addEventListener("click", () => {
      if (input.type === "radio") {
        document.querySelectorAll(".answer")
          .forEach((label) => label.classList.remove("selected"));
        label.classList.add("selected");
      } else {
        label.classList.toggle("selected");
      }
      nextBtn.disabled = false;
    });

    label.appendChild(input);
    reponses.appendChild(label);
  });
  stopTimer(timerQuestion);
  timerQuestion = timer(4);
}

nextBtn.addEventListener("click", () => {
  const currentQuestionData = selectedQuestions[currentIndex];

  const selectedRes = reponses.querySelectorAll(".ResInput:checked");
  const userChoices = [];
  selectedRes.forEach((input) => {
    userChoices.push(parseInt(input.getAttribute("data-resIndex")));
  });

  const correctAnswers = [...currentQuestionData.reponse_correct].sort(
    (a, b) => a - b
  );
  const sortedUserChoices = [...userChoices].sort((a, b) => a - b);
  const isCorrect =
    correctAnswers.length === sortedUserChoices.length &&
    correctAnswers.every((val, i) => val === sortedUserChoices[i]);

  if (isCorrect) score++;

  quizHistorique[quizHistorique.length - 1].reponses.push({
    quest: currentQuestionData.question,
    reponseChosie: userChoices.length ? userChoices.map((i) => currentQuestionData.reponses[i]): ["No Answer"],
    reponseCorrect: correctAnswers.map((i) => currentQuestionData.reponses[i]),
  });

  if (currentIndex < selectedQuestions.length - 1) {
    currentIndex++;
    stopTimer(timerQuestion);
    nextBtn.disabled = true;
    showQuestions(selectedQuestions, currentIndex);
  } else {
    stopTimer(timerQuestion);
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
    quizHistorique[quizHistorique.length - 1].score = score;
    // const responses = reponses.querySelector(".ResInput");
    // responses.classList.add
  }
});

function timer(count) {
  let t = setInterval(function () {
    time.textContent = count;
    count--;
    if (count < 0) {
      stopTimer(t);
      nextBtn.disabled = false;
      nextBtn.click();
    }
  }, 1000);
  return t;
}

function stopTimer(timer) {
  clearInterval(timer);
}

submitBtn.addEventListener("click", () => {
  questions.classList.remove("active");
  result.classList.add("active");

  const history = quizHistorique;
  
  localStorage.setItem("historique", JSON.stringify(quizHistorique));
  // console.log("historrique:", quizHistorique);
  // console.log("histo", history);
  let dernierQuiz = history[history.length - 1]; 
  // console.log(dernierQuiz);
  history.push(dernierQuiz);
  scoreFinale.textContent = dernierQuiz.score;
  totalQuest = total.textContent;
  feedback.innerHTML = feedBack(dernierQuiz.score, totalQuest);
  showResult(dernierQuiz);
});

function feedBack(score, total) {
  if (score === total) {
    return "Excellent ! Vous avez tout juste, bravo";
  } else if (score >= total * 0.7) {
    return "Très bien ! Vous maîtrisez presque tout ";
  } else if (score >= total * 0.4) {
    return "Pas mal, mais vous pouvez encore progresser";
  } else {
    return "Il faut réviser, ne vous découragez pas";
  }
}

function showResult(quiz) {
  finalResult.innerHTML = "";
  quiz.reponses.forEach((reponse, i) => {
    const divResult = document.createElement("div");
    divResult.classList.add("divResult");
    const questionResult = document.createElement("p");
    questionResult.innerHTML = `<span class="questRes">Question ${i + 1}:</span> ${reponse.quest}`;

    const divReponsesResult = document.createElement("div");
    divReponsesResult.innerHTML = `<strong>Votre réponse :</strong> ${reponse.reponseChosie}`;
    divReponsesResult.id = "divReponsesResultId";

    const repCorretResult = document.createElement("p");
    repCorretResult.innerHTML = `<strong>Bonne réponse :</strong> ${reponse.reponseCorrect}`;

    divResult.appendChild(questionResult);
    divResult.appendChild(divReponsesResult);
    divResult.appendChild(repCorretResult);

    finalResult.appendChild(divResult);
  });
}

recommancerBtn.addEventListener("click", () => {
  result.classList.remove("active");
  start.classList.add("active");
  usernameInput.value = localStorage.getItem("username");
  currentIndex = 0;
  score = 0;
  nextBtn.style.display = "block";
  submitBtn.style.display = "none";
});
