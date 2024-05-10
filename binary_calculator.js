const userInput = document.querySelector("#user_input");
let expression = "";

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Function to convert decimal to binary
function decimalToBinary(decimal) {
  return decimal.toString(2);
}

// Function to handle button press
press = (num) => {
  expression += num;
  userInput.value = binaryToDecimal(expression);
}

// Function to evaluate expression
equal = () => {
  userInput.value = decimalToBinary(eval(binaryToDecimal(expression)));
  expression = "";
}

// Function to erase the expression
erase = () => {
  expression = "";
  userInput.value = expression;
}
