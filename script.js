function add(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber + secondNumber;
    return value;
}
function subtract(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber - secondNumber;
    return value;
}
function multiply(firstNumber, secondNumber){
    let value = 0;
    value = firstNumber * secondNumber;
    return value;
}
function divide(firstNumber, secondNumber){
    if(firstNumber == 0){
        return 'erro';
    }else{
    let value = 0;
    value = firstNumber / secondNumber;
    return value;
    }
}
function operate(){
const firstNumber = parseFloat(displayFirstNumber);
const secondNumber = parseFloat(displaySecNumber);

    switch(displayOperator){
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

const display = document.querySelector("#display");

let displayFirstNumber = '';
let displaySecNumber = '';
let displayOperator = null;

const containerNumber = document.querySelector(".number");

for(let i=1; i<=9; i++){
    const btnNumber = document.createElement('button');
    btnNumber.textContent = i;
    btnNumber.addEventListener('click', () => updateDisplay(i));
    containerNumber.appendChild(btnNumber);
}

const containerOperator = document.querySelector(".operator");

const operators = ['+', '-', '*', '/'];

operators.forEach(op => {
    const btnOperators = document.createElement('button');
    btnOperators.textContent = op;
    btnOperators.addEventListener('click', () => setOperator(op));
    containerOperator.appendChild(btnOperators);

});

function updateDisplay(num){
    if(displayOperator == null){
        displayFirstNumber += num;
        display.value = displayFirstNumber;
    }
    else{
        displaySecNumber += num;
        display.value = displaySecNumber;
    }
}

function setOperator(op){
    if(displayFirstNumber != ''){
        displayOperator = op;
        display.value = '';
    }
    
}

const btnResult = document.createElement('button');
btnResult.textContent = '=';
containerOperator.appendChild(btnResult);

btnResult.addEventListener('click', () => {
    if(displayFirstNumber !== '' && displaySecNumber !== ''){
        const result = operate();
        display.value = result.toString();
        displayFirstNumber = result.toString();
        displaySecNumber = '';
        displayOperator = null;
    }
});

const btnClearAll = document.createElement('button');
btnClearAll.textContent = 'Clear all';
containerOperator.appendChild(btnClearAll);

btnClearAll.addEventListener('click', () =>{
    display.value = '';
    displayFirstNumber = '';
    displaySecNumber = '';
    displayOperator = null;
});