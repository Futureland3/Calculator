// let button = document.querySelectorAll('[data-number]').forEach(link => 
//     link.addEventListener('click',() => {
//         // return document.getElementById('result').innerHTML = button;
//         console.log(button);
// }));
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');
const displayResult = document.getElementById('result');

equalButton.addEventListener('click', evaluate )
clearButton.addEventListener('click', clear)
dotButton.addEventListener('click', dot)
deleteButton.addEventListener('click', dlt)

function add(a, b) {
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return 'x'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
  }

numberButtons.forEach ((button) =>
    button.addEventListener('click',() => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (displayResult.textContent === '0' || shouldResetScreen === true)
      reset();
    displayResult.textContent += number
  }

operatorButtons.forEach((button) =>
    button.addEventListener('click',() => appendNumber(button.textContent))
  );

function reset() {
    displayResult.textContent = ''
    shouldResetScreen = false //this line is actually not that needed
  }

  function operate(a, operator, b) {
    a = Number(a);
    b= Number(b);
    switch (operator) {
        case '+':
            return add();
        case '-':
            return subtract();
        case 'x':
            return multiply();
        case '÷':
            if (b === 0) return null
      else return divide(a, b)
    default:
      return null
    }
}

function dot() {
    if (shouldResetScreen) reset()
    if (displayResult.textContent === '')
      displayResult.textContent = '0'
    if (displayResult.textContent.includes('.')) return
    displayResult.textContent += ''
  }

function clear() {
    displayResult.textContent = '0'
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
  }

function dlt() {
  displayResult.textContent = displayResult.textContent
    .toString()
    .slice(0, -1)
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOperand = displayResult.textContent
  currentOperation = operator
  displayResult.textContent = `${firstOperand} ${currentOperation}`
  shouldResetScreen = true
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return
  if (currentOperation === '÷' && displayResult.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondOperand = displayResult.textContent
  displayResult.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  )
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
  currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }
