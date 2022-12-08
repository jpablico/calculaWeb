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

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', function() {
        if(operator === '') {
            integerOne += numberButtons.textContent;
            integerOne = parseFloat(integerOne);
            console.log(typeof integerOne);
            displayIntegerOne = integerOne;
            displayUpdate();
        } else {
            integerTwo += numberButtons.textContent;
            integerTwo = parseFloat(integerTwo);
            displayIntegerTwo = integerTwo;
            displayUpdate();
        }
    })
})
function displayUpdate() {
    mainDisplay.textContent = `${integerOne} ${operator} ${integerTwo}`;
    console.log(mainDisplay);
}
operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener('click', function() {
        operator = '';
        operator += operationButtons.textContent;
        displayUpdate();
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
    mainDisplay.textContent = '0';
}
function compute() {
    console.log('bip');
    switch(operator) {
        case '*':
            console.log('boom');
            multiplication(integerOne, integerTwo)
            break;
        case '÷':
            division(integerOne, integerTwo)
            break;
        case '+':
            addition(integerOne, integerTwo)
            break;
        case '-':
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