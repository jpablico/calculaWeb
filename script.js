const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const mainDisplay = document.getElementById('main-display');
const subDisplay = document.getElementById('sub-display')
//Calculation variables 
let operator = '';
let integerOne = '';
let integerTwo = '';
//Display variables
let displayIntegerOne = '';
let displayIntegerTwo = '';
let operatorCh ='';

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', function() {
        console.log('bop')
        if(operator === '') {
            integerOne += numberButtons.textContent;
            console.log("integer one: " + integerOne);
            mainDisplay.textContent = integerOne;
        }
        else {
            integerTwo +=numberButtons.textContent;
            console.log("integer two " + integerTwo);
        }
    })
});
operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener('click', function() {
        operator = '';
        operator += operationButtons.textContent;
        console.log(operator);
    });
});
allClearButton.forEach(allClearButton => {
    allClearButton.addEventListener('click', function() {
        operator = '';
        integerOne = '';
        integerTwo = '';
    })
})
function displayClear() {
    operation = '';
    integerOne = '';
    integerTwo = '';
}
function compute() {
    switch(operatorCh) {
        case multiplication:
            multiplication(integerOne, integerTwo)
            break;
        case division:
            division(integerOne, integerTwo)
            break;
        case addition:
            addition(integerOne, integerTwo)
            break;
        case subtraction:
            subtraction(integerOne, integerTwo)
            break;
    }
};
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