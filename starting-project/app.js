"use strict";
function addNumbers(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
let number1 = 5;
let number2 = 2.8;
const printResult = true;
const resultPhrase = "result: ";
const result = addNumbers(number1, number2, printResult, resultPhrase);
console.log(result);
