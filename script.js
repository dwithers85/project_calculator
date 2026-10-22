let numberA = "";
let numberB = "";
let operation = "";
let nextOperation = "";
const digitsRow = document.querySelector("#button-container");
const inputField = document.querySelector(".input-field");

digitsRow.addEventListener("click", e => {
    if(e.target.matches(".inputBtn") && operation === ""){
        numberA += e.target.value;
        inputField.textContent = numberA;
        console.log("A: "+ numberA);
        console.log("B: "+ numberB);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
    }//only if inputBtn
    else if(e.target.matches(".inputBtn") && operation !== "" && operation !== "=" && operation !== "ERR"){
        numberB += e.target.value;
        inputField.textContent = numberB;
        console.log("A: "+ numberA);
        console.log("B: "+ numberB);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
    }
    else if(e.target.matches(".inputBtn") && (operation === "=" || operation ==="ERR")){
        numberA = e.target.value;
        inputField.textContent = numberA;
        operation = "";
        console.log("A: "+ numberA);
        console.log("B: "+ numberB);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
        }
    else if(e.target.matches(".clearBtn")){
        calcInput = "";
        numberA = "";
        numberB = "";
        operation = "";
        inputField.textContent = numberA;
        console.log("A: "+ numberA);
        console.log("B: "+ numberB);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
    }//clear calcInput
    else if(e.target.matches(".operandBtn") && numberB === ""){
        operation = e.target.value;
        console.log("A: "+ numberA);
        console.log("B: "+ numberB);
        console.log("Operation: "+operation);
        console.log("Next Operation: "+nextOperation);
    }
        else if(e.target.matches(".operandBtn") && numberB !== ""){
        nextOperation = e.target.value;
        console.log("A: "+ numberA);
        console.log("B: "+ numberB);
        console.log("Operation: "+ operation)
        console.log("Answer: "+operationMath(numberA, numberB, operation));
        
    }
});

function operationMath(a,b,operator){
    if (operator === "+"){
        numberA = +a+(+b);
        operation = nextOperation;
    }//addition
    else if(operator === "-"){
        numberA = +a-(+b);
        operation = nextOperation;
    }//subtraction
    else if(operator === "x"){
        numberA = +a*(+b);
        operation = nextOperation;
    }//mutiply
    else if(operator === "/"){
        if (+b === 0){
            numberA="";
            numberB="";
            operation="ERR";
            nextOperation="";
            numberA = "ERR: Cannot divide by 0";
        } else {
            numberA = +a/(+b);
            operation = nextOperation;
        }
    }//divide
    numberB = "";
    inputField.textContent = numberA;
    return numberA;
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

