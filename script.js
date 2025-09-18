const data = [
  {
    categorie: "JavaScript",
    questions: [
      {
        type: "multiple",
        question: "Que signifie NaN en JavaScript ?",
        reponses: [
          "Not a Node",
          "Not a Number",
          "New array Number",
          "No assigned Name",
        ],
        reponse_correct: [1,2],
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
        type: "single",
        question: "Quelle est la portée d'une variable déclarée avec let ?",
        reponses: ["Globale", "Bloc", "Fonction", "Module"],
        reponse_correct: [1],
      },
      {
        type: "multiple",
        question: "Quel mot-clé permet de définir une constante ?",
        reponses: ["var", "const", "let", "static"],
        reponse_correct: [0,1,3],
      },
      {
        type: "single",
        question:
          "Comment écrire un commentaire sur une seule ligne en JavaScript ?",
        reponses: ["<!-- -->", "//", "/* */", "#"],
        reponse_correct: [1],
      },
    ],
  },
  {
    categorie: "Node.js",
    questions: [
      {
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
        question:
          "Quel module intégré permet de créer un serveur HTTP en Node.js ?",
        reponses: ["fs", "http", "events", "net"],
        reponse_correct: [1],
      },
      {
        question:
          "Quel gestionnaire de paquets est installé avec Node.js par défaut ?",
        reponses: ["yarn", "npm", "pnpm", "composer"],
        reponse_correct: [1],
      },
      {
        question:
          "Quelle méthode est utilisée pour lire un fichier en Node.js ?",
        reponses: ["fs.read()", "fs.readFile()", "fs.load()", "file.open()"],
        reponse_correct: [1],
      },
      {
        question: "Que permet d'utiliser 'require' en Node.js ?",
        reponses: [
          "Importer un module",
          "Créer un serveur",
          "Compiler le code",
          "Définir une classe",
        ],
        reponse_correct: [0],
      },
    ],
  },
  {
    categorie: "Bases de données",
    questions: [
      {
        question: "Quel type de base de données est MongoDB ?",
        reponses: [
          "Base relationnelle",
          "Base orientée documents",
          "Base en mémoire",
          "Base orientée graphes",
        ],
        reponse_correct: 1,
      },
      {
        question:
          "Quel langage est utilisé pour interroger une base relationnelle comme MySQL ou PostgreSQL ?",
        reponses: ["NoSQL", "GraphQL", "SQL", "JSON"],
        reponse_correct: 2,
      },
      {
        question:
          "Quelle commande permet de lister toutes les bases de données dans MySQL ?",
        reponses: [
          "SHOW DATABASES;",
          "LIST DATABASES;",
          "SELECT DATABASES;",
          "GET DATABASES;",
        ],
        reponse_correct: 0,
      },
      {
        question:
          "Dans une base relationnelle, comment appelle-t-on une ligne d'une table ?",
        reponses: ["Champ", "Colonne", "Enregistrement", "Clé"],
        reponse_correct: 2,
      },
      {
        question: "Quel SGBD est orienté documents ?",
        reponses: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
        reponse_correct: 2,
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
// const submitBtn = document.getElementById("submitBtn");
const time = document.getElementById("time");
const username = document.getElementById("username");
let currentIndex = 0;
let selectedQuestions = [];
let timerQuestion;

categories.forEach((cat) => {
  cat.addEventListener("click", () => {
    // console.log("i am clicked");
    const username = usernameInput.value.trim();
    console.log(username);
    if (username === "") {
      errorMsg.style.display = "block";
    } else {
      localStorage.setItem("username", username);
      errorMsg.style.display = "none";
      questions.classList.add("active");
      start.classList.remove("active");
      const selectedCat = cat.textContent.trim();
      console.log("la categoie choisie :", selectedCat);
      const selectedData = data.find((d) => d.categorie === selectedCat);
      selectedQuestions = selectedData.questions;
      // console.log("les questions",selectedQuestions);
      if (selectedData) {
        showQuestions(selectedQuestions, currentIndex);
      }
    }
  });
});

function showQuestions(questionArray, index) {
  // console.log("inside showQuestion fct");
  question.innerHTML = "";
  reponses.innerHTML = "";

  const qest = questionArray[index];
  question.textContent = qest.question;
  qest.reponses.forEach((rep, i) => {
    const input = document.createElement("input");
    input.value = rep;
    input.id = `answer-${i}`;
    input.type = questionArray[index].type == "multiple" ? "checkbox" : "radio";

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = rep;
    label.classList.add("answer");
    input.addEventListener("click", () => {
      // console.log(input.type);
      if ((input.type === "radio")) {
        // console.log("inside if")
        document.querySelectorAll(".answer").forEach((label) => label.classList.remove("selected"));
        label.classList.add("selected");
      }else{
        // console.log("inside else");
        label.classList.toggle("selected");
      }
      nextBtn.disabled = false;
    });  

    reponses.appendChild(input);
    reponses.appendChild(label);
  });
  stopTimer(timerQuestion);
  timerQuestion = timer(10);
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < selectedQuestions.length - 1) {
    currentIndex++;
    stopTimer(timerQuestion);
    nextBtn.disabled = true;
    showQuestions(selectedQuestions, currentIndex);
    // localStorage;setItem("")
  } else {
    alert("quiz terminé");
  }
});

function timer(count){
  let t = setInterval(function(){
    // console.log(count);
    time.textContent= count;
    count--;
    if(count < 0){
      stopTimer(t);
      nextBtn.disabled = false;
      nextBtn.click();
    }
  },1000);
  return t;
}

function stopTimer(timer){
  clearInterval(timer)
}

username.textContent = localStorage.getItem("username");

// submitBtn.addEventListener("click", ()=>{
//    if (currentIndex < selectedQuestions.length - 1) {
//     currentIndex++;
//     showQuestions(selectedQuestions, currentIndex);

//   } else {
//     alert("quiz terminé");
//   }
// })
