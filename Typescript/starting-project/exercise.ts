let userInput: unknown
let userNmae: string

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code}
}

// The never word is indicated to never return anything
const response = generateError('An error occurred!', 500) // --> returns never

console.log(response)