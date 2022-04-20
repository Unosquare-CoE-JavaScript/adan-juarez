"use strict";
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    //tuple
    role: [2, 'author']
};
let favoriteActivities;
person.role.push('admin');
console.log(person.role);
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
// enums
var OPTIONS_ROLE;
(function (OPTIONS_ROLE) {
    //add an option
    OPTIONS_ROLE["ADMIN"] = "ADMIN";
    OPTIONS_ROLE[OPTIONS_ROLE["READ_ONLY"] = 100] = "READ_ONLY";
    OPTIONS_ROLE[OPTIONS_ROLE["AUTHOR"] = 1] = "AUTHOR";
})(OPTIONS_ROLE || (OPTIONS_ROLE = {}));
const persons = {
    name: 'Max',
    role: OPTIONS_ROLE
};
console.log(persons.role.ADMIN);
//nested objects
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    /*  if(resultConversion === 'as-number') {
         return +result
     } else {
         return result.toString()
     } */
    //const result = input1 + input2
    return result;
}
const combinedNames = combine("Ana", "Michelle", 'as-text');
const combinedNumbers = combine(1.9, 3, 'as-number');
console.log(combinedNames);
