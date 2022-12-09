let currentNum = "";
let previousNum = "";
let operator = "";

const displayScreen = document.getElementById('result');
const numberButtons = document.querySelectorAll("button[data-number]");
const operatorButtons = document.querySelectorAll("button[data-operator]");
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');
const equalButton = document.getElementById('equal');
const previousDisplayNumber = document.getElementById('previousNumber');

window.addEventListener('keydown', handleKeyPress);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del);
dotButton.addEventListener('click', dot);
equalButton.addEventListener('click', () => {
    if (currentNum != "" && previousNum != "") {
        calculate();
    }
});

// numberButtons.forEach(function(e) {
//     e.addEventListener('click', (elem) => {
//         if (displayScreen.textContent.length <= 8) {
//        currentNum += elem.target.textContent;
//        displayScreen.textContent = currentNum;
//         }
//     })
// });

numberButtons.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    currentNum += number;
    displayScreen.textContent = currentNum;
}

// symbolButtons.forEach(function(sym) {
//     sym.addEventListener('click',() => {
//         //Only allow one on display after at least 1 number
//     } )
// })

operatorButtons.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + "" + operator;
    currentNum = "";
    displayScreen.textContent = ""; 

}

function clear() {
    currentNum = "";
    previousNum = "";
    displayScreen.textContent = "0";
    previousDisplayNumber.textContent = "";
    operator = "";
}

function del() {
    if (currentNum.length > 0) {
    currentNum = currentNum.slice(0,-1);
    displayScreen.textContent = currentNum;
    }
    if (currentNum.length <= 0) {
        displayScreen.textContent = "0";
   }
}



function dot() {
   if (!currentNum.includes(".")) {
    currentNum += ".";
    displayScreen.textContent = currentNum;
   }
}

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+') {
        previousNum += currentNum;
    }
    else if (operator === '-') {
        previousNum -= currentNum;
    }
    else if (operator === 'x') {
        previousNum *= currentNum;
    }
    else if (operator === '÷' || operator === "/") {
    if (currentNum <= "0") {
        previousNum = "Error";
        displayResults();
        return;
    }
        previousNum /= currentNum;
    }
    previousNum = previousNum.toString()
    displayResults();
}

function roundNumber (num) {
    return Math.round(num * 100000) / 100000;
}

function displayResults() {
    previousDisplayNumber.textContent = '';
    operator = '';
    if (previousNum.length <= 7){
        displayScreen.textContent = previousNum;
    }
    else { 
        displayScreen.textContent = previousNum.slice(0, 7) + '...';
    }
}

function handleKeyPress(e) {
    if (e.key === "."){dot();}
    if (e.key === "Enter"){calculate()}
    if (e.key === "Backspace"){del()}
    if (e.key === "Escape"){clear()}
    if (e.key === "x" || e.key === "÷" || e.key === "-" || e.key === "+"){handleOperator(e.key)}
    if (e.key >=0 || e.key <= 9) {handleNumber(e.key)}
}

  

// elementsArray.forEach(function(elem) {
//     elem.addEventListener("input", function() {
//         //this function does stuff
//     });
// })};

//Big numbers into small numbers

//Can insert 20 numbers but the numbers get smaller the more you type (this would be a loop)
//The more you insert the smaller the number  for (i = 7; i < 20; i++) {document.getElementById("result").style.fontSize = -5px;;}

//Keyboard thing