// Calculator Logic
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
  
    let currentInput = "";
    let operation = null;
  
    // Function to update the display
    const updateDisplay = (value) => {
      display.value = value;
    };
  
    // Function to evaluate expressions
    const calculate = (expression) => {
      try {
        return eval(expression);
      } catch (err) {
        return "Error";
      }
    };
  
    // Add event listener to all buttons
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (value === "AC") {
          currentInput = "";
          updateDisplay(currentInput);
        } else if (value === "=") {
          currentInput = calculate(currentInput);
          updateDisplay(currentInput);
        } else if (value === "^2") {
          currentInput = Math.pow(parseFloat(currentInput || "0"), 2);
          updateDisplay(currentInput);
        } else {
          currentInput += value;
          updateDisplay(currentInput);
        }
      });
    });
  });
  