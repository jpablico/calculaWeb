const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const prevOperandTextElement = document.querySelector('data-prev-operand');
const curOperandTextElement = document.querySelector('data-cur-operand');

const calculator = new Calculator(prevOperandTextElement, curOperandTextElement);

class Calculator {
    constructor(prevOperandTextElement, curOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.curOperandTextElement = curOperandTextElement;
        this.clear();
    }
    clear() {
        this.currentOperand = '';
        this.prevOperant = '';
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        if(number === '.' && this curOperandTextElement.includes('.')
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.curOperandTextElement.innerText = this.currentOperand;
    }
}