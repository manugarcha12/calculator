let screen = document.getElementById("display");
let result = document.getElementById("result");
let btn = document.querySelectorAll("#num");
let clearBtn = document.getElementById("clear");
let number = "";
let a;
let b;
let operator;

function add(num1, num2) {
  let answer = num1 + num2;
  return answer;
}

function subtract(num1, num2) {
  let answer = num1 - num2;
  return answer;
}

function multiply(num1, num2) {
  let answer = num1 * num2;
  return answer;
}
function divide(num1, num2) {
  let answer = num1 / num2;
  if (answer === Infinity) {
    answer = "8008135";
    return answer;
  } else {
    return answer;
  }
}

function updateDisplay(event) {
  if (event.target.innertext === "clear") {
    number = "";
    screen.innerText = number;
  } else if (event.target.innerText === "+") {
    a = Number(screen.innerText);
    operator = "+";
    number = "";
    screen.innerText = number;
  } else if (event.target.innerText === "-") {
    a = Number(screen.innerText);
    operator = "-";
    number = "";
    screen.innerText = number;
  } else if (event.target.innerText === "x") {
    a = Number(screen.innerText);
    operator = "x";
    number = "";
    screen.innerText = number;
  } else if (event.target.innerText === "/") {
    a = Number(screen.innerText);
    operator = "/";
    number = "";
    screen.innerText = number;
  } else if (event.target.innerText === "=") {
    if (operator === "+") {
      b = Number(screen.innerText);
      number = "";
      screen.innerText = number;
      result.innerText = add(a, b);
      a = result.innerText;
      console.log(result.innerText);
    } else if (operator === "-") {
      b = Number(screen.innerText);
      number = "";
      screen.innerText = number;
      result.innerText = subtract(a, b);
      a = result.innerText;
    } else if (operator === "x") {
      b = Number(screen.innerText);
      number = "";
      screen.innerText = number;
      result.innerText = multiply(a, b);
      a = result.innerText;
    } else if (operator === "/") {
      b = Number(screen.innerText);
      number = "";
      screen.innerText = number;
      result.innerText = divide(a, b);
      a = result.innerText;
    }
  } else {
    number += event.target.innerText.toString();
    screen.innerText = number;
    result.innerText = "";
  }
}

function clear() {
  number = "";
  screen.innerText = number;
  result.innerText = "";
}

btn.forEach((button) => {
  button.addEventListener("click", updateDisplay);
});

clearBtn.addEventListener("click", clear);
