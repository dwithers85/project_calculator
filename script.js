//problem where dividing by zero, pressing =, then pressing another operand like + causes the code to break.

let numberCurrent = "";
let numberPrevious = "";
let operation = "";
let nextOperation = "";
const digitsRow = document.querySelector("#button-container");
const inputField = document.querySelector(".input-field");

digitsRow.addEventListener("click", e => {
    if(e.target.matches(".inputBtn")){
        numberCurrent += e.target.value;
        inputField.textContent = numberCurrent;
        console.log("A: "+ numberCurrent);
        console.log("B: "+ numberPrevious);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
    }//only if inputBtn
    else if(e.target.matches(".inputBtn") && operation !== "" && operation !== "=" && operation !== "ERR"){
        numberPrevious += e.target.value;
        inputField.textContent = numberPrevious;
        console.log("A: "+ numberCurrent);
        console.log("B: "+ numberPrevious);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
    }
    else if(e.target.matches(".inputBtn") && (operation === "=" || operation ==="ERR")){
        numberCurrent = e.target.value;
        inputField.textContent = numberCurrent;
        operation = "";
        console.log("A: "+ numberCurrent);
        console.log("B: "+ numberPrevious);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
        }
    else if(e.target.matches(".clearBtn")){
        calcInput = "";
        numberCurrent = "";
        numberPrevious = "";
        operation = "";
        inputField.textContent = numberCurrent;
    }//clear calcInput
    else if(e.target.matches(".operandBtn") && numberPrevious === ""){
        operation = e.target.value;
    }
        else if(e.target.matches(".operandBtn") && numberPrevious !== ""){
        nextOperation = e.target.value;
        console.log("Answer: "+operationMath(numberCurrent, numberPrevious, operation));
        
    }
});

function operationMath(a,b,operator){
    if (operator === "+"){
        numberCurrent = +a+(+b);
        operation = nextOperation;
    }//addition
    else if(operator === "-"){
        numberCurrent = +a-(+b);
        operation = nextOperation;
    }//subtraction
    else if(operator === "x"){
        numberCurrent = +a*(+b);
        operation = nextOperation;
    }//mutiply
    else if(operator === "/"){
        if (+b === 0){
            numberCurrent="";
            numberPrevious="";
            operation="ERR";
            nextOperation="";
            numberCurrent = "ERR: Cannot divide by 0";
        } else {
            numberCurrent = +a/(+b);
            operation = nextOperation;
        }
    }//divide
    numberPrevious = "";
    inputField.textContent = numberCurrent;
    return numberCurrent;
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

