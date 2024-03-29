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
let tempInt = '';

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', function() {
        if(operator === '' && tempInt === '') {
            if(numberButtons.textContent === '.') {
            integerOne += numberButtons.textContent;
            displayUpdate();
            } else {
                integerOne += numberButtons.textContent;
                displayUpdate();
                integerOne = parseFloat(integerOne);
            }
        } else if(operator != '') {
            if(numberButtons.textContent === '.') {
            integerTwo += numberButtons.textContent;
            displayUpdate();
            } else {
            integerTwo += numberButtons.textContent;
            displayUpdate();
            integerTwo = parseFloat(integerTwo);
            }
        } else {
            return;
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
    tempInt = '';
    mainDisplay.textContent = '0';
}
function afterDecimal(num) {
    if (Number.isInteger(num)) {
      return 0;
    }
  
    return num.toString().split('.')[1].length;
  }
function compute() {
    switch(operator) {
        case '*':
            subDisplay.textContent = mainDisplay.textContent;
            mainDisplay.textContent = '';
            mainDisplay.textContent = multiplication(integerOne,integerTwo);
            tempInt = multiplication(integerOne,integerTwo).toFixed(2);
            tempInt = mainDisplay.textContent
            console.log(tempInt);
            break;
        case '÷':
            subDisplay.textContent = mainDisplay.textContent;
            mainDisplay.textContent = '';
            mainDisplay.textContent = division(integerOne,integerTwo);
            tempInt = mainDisplay.textContent;
            break;
        case '+':
            subDisplay.textContent = mainDisplay.textContent;
            mainDisplay.textContent = '';
            mainDisplay.textContent = addition(integerOne,integerTwo);
            tempInt = mainDisplay.textContent;
            break;
        case '-':
            
            subDisplay.textContent = mainDisplay.textContent;
            mainDisplay.textContent = '';
            mainDisplay.textContent = subtraction(integerOne,integerTwo);
            tempInt = mainDisplay.textContent;
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