const person: {
    name: string,
    age: number,
    hobbies: string[],
    //tuple
    role: [number, string] 
} = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    //tuple
    role: [2, 'author']
}

let favoriteActivities: string[]

person.role.push('admin')
console.log(person.role)
console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    
}

// enums

enum OPTIONS_ROLE {
    //add an option
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 1
}

const persons = {
    name: 'Max',
    role: OPTIONS_ROLE
}

console.log(persons.role.ADMIN)

//nested objects

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}


// unions
type Combinable = number | string
type ConversionDescription = 'as-number' | 'as-text'

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescription ) {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
   /*  if(resultConversion === 'as-number') {
        return +result
    } else {
        return result.toString()
    } */
    //const result = input1 + input2
    return result
}

const combinedNames = combine("Ana", "Michelle", 'as-text' )
const combinedNumbers = combine(1.9, 3, 'as-number')
console.log(combinedNames)