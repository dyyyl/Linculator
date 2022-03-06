// Simple map of operations to their respective button ids
const operationsMap = {
  "+": "add",
  "-": "subtract",
  x: "multiply",
  "/": "divide",
};

// Initial application state
let operation = "";
let firstNumber = "";

/**
 * Sets the input value to the given value
 * @param {string} number - The number to set the input to
 */
const setInput = (number) => {
  const input = document.getElementById("input").value;

  if (input === "0") {
    document.getElementById("input").value = number;
  } else if (input.length <= 21) {
    document.getElementById("input").value = input + number;
  }
};

/**
 * Sets the operation to the given value pressed
 * @param {string} operator - The operation to set the operation to
 */
const setOperation = (operator) => {
  const operationButton = document.getElementById(operationsMap[operation]);
  if (operationButton) operationButton.classList.remove("active");

  operation = operator;

  document.getElementById(operationsMap[operation]).className = "active";

  firstNumber = document.getElementById("input").value;

  document.getElementById("input").value = "0";
};

// Clear input
document.getElementById("clear").onclick = function () {
  document.getElementById("input").value = "0";
};

// Swap sign
document.getElementById("sign").onclick = function () {
  const input = document.getElementById("input").value;
  document.getElementById("input").value = input * -1;
};

// Add decimal to number
document.getElementById("decimal").onclick = function () {
  const input = document.getElementById("input").value;

  if (input.indexOf(".") === -1) {
    document.getElementById("input").value = input + ".";
  }
};

document.getElementById("divide").onclick = function () {
  setOperation("/");
};

document.getElementById("multiply").onclick = function () {
  setOperation("x");
};

document.getElementById("subtract").onclick = function () {
  setOperation("-");
};

document.getElementById("add").onclick = function () {
  setOperation("+");
};

document.getElementById("one").onclick = function () {
  setInput("1");
};

document.getElementById("two").onclick = function () {
  setInput("2");
};

document.getElementById("three").onclick = function () {
  setInput("3");
};

document.getElementById("four").onclick = function () {
  setInput("4");
};

document.getElementById("five").onclick = function () {
  setInput("5");
};

document.getElementById("six").onclick = function () {
  setInput("6");
};

document.getElementById("seven").onclick = function () {
  setInput("7");
};

document.getElementById("eight").onclick = function () {
  setInput("8");
};

document.getElementById("nine").onclick = function () {
  setInput("9");
};

document.getElementById("zero").onclick = function () {
  setInput("0");
};

document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  const secondNumber = document.getElementById("input").value;
  let result = 0;

  switch (operation) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;

    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;

    case "x":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;

    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;

    default:
      break;
  }

  const operationButton = document.getElementById(operationsMap[operation]);
  if (operationButton) operationButton.classList.remove("active");

  document.getElementById("input").value = result;
  operation = "";
  firstNumber = "";
};
