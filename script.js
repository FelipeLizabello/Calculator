let firstNumber, secondNumber, operator;

function add(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber + secondNumber;
    return value;
}
function subtract(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber + secondNumber;
    return value;
}
function multiply(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber * secondNumber;
    return value;
}
function divide(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber / secondNumber;
    return value;
}
function operate(firstNumber, secondNumber, operator){
    switch(operator){
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return "Invalid operator!";
   }
}

const containerNumber = document.querySelector(".number");

for(let i=1; i<=9; i++){
    const btnNumber = document.createElement('button');
    btnNumber.textContent = i;
    containerNumber.appendChild(btnNumber);
}

const containerOperator = document.querySelector(".operator");

const operators = ['+', '-', '*', '/'];

operators.forEach(op => {
    const btnOperators = document.createElement('button');
    btnOperators.textContent = op;
    containerOperator.appendChild(btnOperators);

});

