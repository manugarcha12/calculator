let screen = document.getElementById("#display");
let result = document.querySelectorAll("#result");
let btn = document.querySelectorAll("#num");
let number = 0;

function updateDisplay(event) {
  number += event.target.innerText.toString();
  screen.innerText = number;
}

btn.forEach((button) => {
  button.addEventListener("click", updateDisplay);
});
