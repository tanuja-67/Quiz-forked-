const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const quizQuestions = [
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "What is the largest continent on Earth?",
    options: ["Africa", "Asia", "Antarctica", "Europe"],
    answer: "Asia",
  },
  {
    question: "How many bones are there in the adult human body?",
    options: ["206", "215", "195", "230"],
    answer: "206",
  },
];

// API route to get a random question
app.get("/quiz", (req, res) => {
  const randomQuestion =
    quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  res.json(randomQuestion);
});

// Default route
app.get("/", (req, res) => {
  res.send("Server is running. Use /quiz to get a question.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
