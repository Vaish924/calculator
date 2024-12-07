let displayValue = ''; // Stores the current input

// Appends a number to the display
function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

// Appends an operator
function appendOperator(operator) {
  if (displayValue === '' || /[+\-*/%]$/.test(displayValue)) return;
  displayValue += operator;
  updateDisplay();
}

// Updates the display
function updateDisplay() {
  document.getElementById('result').value = displayValue;
}

// Clears all inputs
function clearAll() {
  displayValue = '';
  updateDisplay();
}

// Calculates the square of the number
function calculateSquare() {
  if (displayValue === '' || isNaN(displayValue)) return;
  displayValue = String(Math.pow(parseFloat(displayValue), 2));
  updateDisplay();
}

// Performs the calculation
function calculateResult() {
  try {
    displayValue = String(eval(displayValue)); // Evaluates the expression
    updateDisplay();
  } catch (error) {
    alert('Invalid Calculation');
    clearAll();
  }
}
