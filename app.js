let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let operator = document.getElementById("operator");

let n1, n2, op, result;

function getRandomQuiz() {
  n1 = Math.floor(Math.random() * (999 - 100) + 100);
  n2 = Math.floor(Math.random() * (999 - 100) + 100);
  op = "+";
  result = n1 + n2;
  console.log(result);
  num1.innerText = n1;
  num2.innerText = `${n2} = `;
  operator.innerText = op;
}
let inputElement = document.getElementById("input");
let answer = document.getElementById("check");
answer.addEventListener("click", compare);

function compare(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  console.log(input);
  if (input == result) {
    console.log("Correct!");
    getRandomQuiz();
  } else {
    console.log("Incorrect!");
  }
  inputElement.value = "";
}

getRandomQuiz();
