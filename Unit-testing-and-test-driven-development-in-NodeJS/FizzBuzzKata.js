// unit tests - green face

export function fizzbuzz(value) {
    if(value % 3 == 0)
        return 'Fizz' 
    if(value % 5 == 0)
        return 'Buzz'
    if(value % 3 == 0 && value % 5 == 0)
        return 'FizzBuzz'
    return value.toString()
    
}