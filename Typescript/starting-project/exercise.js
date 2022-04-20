"use strict";
let userInput;
let userNmae;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// The never word is indicated to never return anything
const response = generateError('An error occurred!', 500); // --> returns never
console.log(response);
