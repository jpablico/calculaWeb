const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const prevOperandTextElement = document.querySelector('data-prev-operand');
const curOperandTextElement = document.querySelector('data-cur-operand');

const calculator = new Calculator(prevOperandTextElement, curOperandTextElement);