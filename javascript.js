const displayScreen = document.getElementById('result');
const numberButtons = document.querySelectorAll("button[data-number]");
const symbolButtons = document.querySelectorAll("button[data-operator]");
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');
const equalButton = document.getElementById('equal');

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del());
dotButton.addEventListener('click', dot());
equalButton.addEventListener('click', calculate());

numberButtons.forEach(function(elem) {
    elem.addEventListener('click', () => {
        displayScreen.textContent += elem.textContent;
    })
})

function clear() {
    displayScreen.textContent = '0';
}

function del() {
    //
}

function dot() {
    //
}

function calculate() {
    //
}

// let elementsArray = document.querySelectorAll("whatever");

// elementsArray.forEach(function(elem) {
//     elem.addEventListener("input", function() {
//         //this function does stuff
//     });
// });