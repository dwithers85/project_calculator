//problem where dividing by zero, pressing =, then pressing another operand like + causes the code to break.

let numberCurrent = "";
let numberPrevious = "";
let operation = "";
const digitsRow = document.querySelector("#button-container");
const inputField = document.querySelector(".input-field");

digitsRow.addEventListener("click", e => {
    if(e.target.matches(".inputBtn")){
        if(e.target.value === "." && numberCurrent.includes(".")){
            return;
        }
        numberCurrent += e.target.value;
        inputField.textContent = numberCurrent;
    }//only if inputBtn
    else if(e.target.matches(".clearBtn")){
        calcInput = "";
        numberCurrent = "";
        numberPrevious = "";
        operation = "";
        inputField.textContent = numberCurrent;
    }//clear calcInput
    else if(e.target.matches(".operandBtn") && (numberPrevious === "" || numberPrevious ==="ERR")){
        numberPrevious = numberCurrent;
        operation = e.target.value;
        numberCurrent = "";
    }
        else if(e.target.matches(".operandBtn")){
        if(numberCurrent !==""){
            operationMath(numberPrevious, numberCurrent, operation);
            operation = e.target.value;
        }//operate if both numberes ready
        else if(numberCurrent === ""){
            operation = e.target.value;
        }//only change operator
    }
});

function operationMath(a,b,operator){
    if (operator === "+"){
        numberPrevious = +a+(+b);
    }//addition
    else if(operator === "-"){
        numberPrevious = +a-(+b);
    }//subtraction
    else if(operator === "x"){
        numberPrevious = +a*(+b);
    }//mutiply
    else if(operator === "/"){
        if (+b === 0){
            numberCurrent="";
            numberPrevious="ERR";
            operation="";
        } else {
            numberPrevious = +a/(+b);
        }
    }//divide
    numberCurrent = "";
    numberPrevious = truncate(numberPrevious, 15);
    inputField.textContent = numberPrevious;
}

function sum(a,b){
    return a+b;
}//addition

function subtract(a,b){
    return a-b;
}//subtraction

function multiply(a,b){
    return a*b;
}//mulltiplication

function divide(a,b){
   if (b === 0){
    return "ERR: Cannot divide by 0";
   } else {
    return a/b;
    }
}//division

function truncate(number, numDigits){
    let str = String(number);
    let arr = str.split("");
    return +arr.slice(0, numDigits).join("");
}//limit number to numDigits long

