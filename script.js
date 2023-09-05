let screen = document.getElementById("display");
let result = document.getElementById("result");
let btn = document.querySelectorAll("#num");
let number = 0;
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

  return answer;
}
function updateDisplay(event) {
  if (event.target.innerText === "+") {
    a = Number(screen.innerText);
    operator = "+";
    number = 0;
    screen.innerText = number;
  } else if (event.target.innerText === "-") {
    a = Number(screen.innerText);
    operator = "-";
    number = 0;
    screen.innerText = number;
  } else if (event.target.innerText === "x") {
    a = Number(screen.innerText);
    operator = "x";
    number = 0;
    screen.innerText = number;
  } else if (event.target.innerText === "/") {
    a = Number(screen.innerText);
    operator = "/";
    number = 0;
    screen.innerText = number;
  } else if (event.target.innerText === "=") {
    if (operator === "+") {
      b = Number(screen.innerText);
      number = 0;
      screen.innerText = number;
      result.innerText = add(a, b);
      a = result.innerText;
      console.log(result.innerText);
    } else if (operator === "-") {
      b = Number(screen.innerText);
      number = 0;
      screen.innerText = number;
      result.innerText = subtract(a, b);
      a = result.innerText;
    } else if (operator === "x") {
      b = Number(screen.innerText);
      number = 0;
      screen.innerText = number;
      result.innerText = multiply(a, b);
      a = result.innerText;
    } else if (operator === "/") {
      b = Number(screen.innerText);
      number = 0;
      screen.innerText = number;
      result.innerText = divide(a, b);
      a = result.innerText;
    }
  } else {
    if (screen.innerText === "0+" || screen.innerText === "0-") {
      number = 0;
      screen.innerText = number;
    }
    number += event.target.innerText.toString();
    screen.innerText = number;
    result.innerText = 0;
  }
}

btn.forEach((button) => {
  button.addEventListener("click", updateDisplay);
});
