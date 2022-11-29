const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const prevOperandTextElement = document.querySelector('data-prev-operand');
const curOperandTextElement = document.querySelector('data-cur-operand');

let operator = '';
let integerOne = '';
let integerTwo = '';

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', function() {
        console.log('bop')
        while(operator === '') {
            integerOne += numberButtons.textContent;
        }
        else {
            integerTwo +=numberButtons.textContent;
        }
        console.log(integerOne);
        console.log(integerTwo);
    })
});
operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener('click', function() {
        operator = operationButtons;
        console.log(operator);
    });
});
























function addition(a,b) {
    var c = a + b;
    return c;
}
function subtraction(a, b) {
    var c = a - b;
    return c;
}
function multiplication(a, b) {
    var c = a * b;
    return c;
}
function division(a, b) {
    var c = a / b;
    return c;
}