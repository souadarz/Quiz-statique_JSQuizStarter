const data = [
  {
    categorie: "JavaScript",
    questions: [
      {
        question: "Que signifie NaN en JavaScript ?",
        reponses: [
          "Not a Node",
          "Not a Number",
          "New array Number",
          "No assigned Name",
        ],
        reponse_correct: 1,
      },
      {
        question:
          "Quelle méthode transforme une chaîne JSON en objet JavaScript ?",
        reponses: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.toObject()",
          "parse.JSON()",
        ],
        reponse_correct: 1,
      },
      {
        question: "Quelle est la portée d'une variable déclarée avec let ?",
        reponses: ["Globale", "Bloc", "Fonction", "Module"],
        reponse_correct: 1,
      },
      {
        question: "Quel mot-clé permet de définir une constante ?",
        reponses: ["var", "const", "let", "static"],
        reponse_correct: 1,
      },
      {
        question:
          "Comment écrire un commentaire sur une seule ligne en JavaScript ?",
        reponses: ["<!-- -->", "//", "/* */", "#"],
        reponse_correct: 1,
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
        reponse_correct: 0,
      },
      {
        question:
          "Quel module intégré permet de créer un serveur HTTP en Node.js ?",
        reponses: ["fs", "http", "events", "net"],
        reponse_correct: 1,
      },
      {
        question:
          "Quel gestionnaire de paquets est installé avec Node.js par défaut ?",
        reponses: ["yarn", "npm", "pnpm", "composer"],
        reponse_correct: 1,
      },
      {
        question:
          "Quelle méthode est utilisée pour lire un fichier en Node.js ?",
        reponses: ["fs.read()", "fs.readFile()", "fs.load()", "file.open()"],
        reponse_correct: 1,
      },
      {
        question: "Que permet d'utiliser 'require' en Node.js ?",
        reponses: [
          "Importer un module",
          "Créer un serveur",
          "Compiler le code",
          "Définir une classe",
        ],
        reponse_correct: 0,
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
      console.log("la catégoie choisie :", selectedCat);
      const selectedData = data.find((d) => d.categorie === selectedCat);
      if (selectedData) {
        showQuestions(selectedData.questions);
      }
    }
  });
});

function showQuestions(questions) {
  question.innerHTML = "";
  reponses.innerHTML = "";
  questions.forEach((q) => {
    question.textContent = q.question;
    q.reponses.forEach((rep, index) => {
      const input = document.createElement("input");
      input.value = rep;
      input.id = `answer-${index}`;
      input.classList.add("answer");
    //   input.type = "radio";
    //   reponses.appendChild(input);

      const label = document.createElement("label");
      label.htmlFor = input.id;
      label.textContent = rep;

      reponses.appendChild(input);
      reponses.appendChild(label);
    });
  });
}
