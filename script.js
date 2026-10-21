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

let x = truncate(123456789.0123456789, 12);
console.log(x);