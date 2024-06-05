let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let operator = document.getElementById("operator");
let streak = document.getElementById("streak");
let score = document.getElementById("score");

let inputElement = document.getElementById("input");
let answer = document.getElementById("check");
answer.addEventListener("click", compare);

let n1, n2, op, result;
let streakCount = 0;
let scoreCount = 0;

function getRandomQuiz() {
  n1 = Math.floor(Math.random() * (999 - 100) + 100);
  n2 = Math.floor(Math.random() * (999 - 100) + 100);
  op = "+";
  result = n1 + n2;
  console.log(result);
  num1.innerText = n1;
  num2.innerText = `${n2} = `;
  operator.innerText = op;
  streak.innerText = streakCount;
  score.innerText = scoreCount;
}

function compare(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  console.log(input);
  if (input == result) {
    scoreCount += 2;
    streakCount += 1;
    getRandomQuiz();
  } else {
    scoreCount -= 1;
    streakCount = 0;
    streak.innerText = streakCount;
    score.innerText = scoreCount;
  }
  inputElement.value = "";
}

getRandomQuiz();
