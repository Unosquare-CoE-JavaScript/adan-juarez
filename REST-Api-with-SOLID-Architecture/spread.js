const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

//console.log('arr3: ', arr3)

const arr4 = arr1;

arr4.push(6)
//console.log('arr1', arr1)
//console.log('arr3', arr3)

const arr5 = arr1.slice()
//console.log(arr5)

const userOne = {
    name: 'David',
    age: 22,
    city: 'Salt Lake City',
    country: 'USA'
}

// Copy an object with different info
/* 
const userTwo = {}
Object.assign(userTwo, userOne)
userTwo.name = 'John'
*/

// method with rest operator
const userTwo = {...userOne, name: 'John', gender: 'male'}

console.log('userone', userOne)
console.log('userTwo ', userTwo)