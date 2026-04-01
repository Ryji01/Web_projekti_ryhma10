const questions = [
  {
    image: "banana.png",
    correct: "bio"
  },
  {
    image: "bottle.png",
    correct: "plastic"
  },
  {
    image: "broken.png",
    correct: "mixed"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("item").src = questions[current].image;
  document.getElementById("result").textContent = "";
}

function checkAnswer(choice) {
  const result = document.getElementById("result");

  if (choice === questions[current].correct) {
    result.textContent = "Oikein!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = "Väärin!";
    result.style.color = "red";
  }

  document.getElementById("score").textContent = "Pisteet: " + score;

  current++;
  if (current < questions.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    result.textContent = "Peli loppui! Pisteet: " + score;
  }
}

loadQuestion();