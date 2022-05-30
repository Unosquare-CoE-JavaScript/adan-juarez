const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(message === 'Wasssup?') {
                return reject('Something went wrong')
            }
            return resolve(message)
        }, 3000)
    })
}

// calback hell
/* displayMessage('Hello').then(result => {
    console.log('result: ', result)
    displayMessage('There?').then(result => {
        console.log('result', result)
        displayMessage('Wassup?').then(result => {
            console.log('result', result)
        }).catch(error => {
            console.log('Error', error)
        })
    }).catch(error => {
        console.log('Error', error)
    })
}) */

console.log('====')

//if you are not using await you can do like above the function
const greetings = async () => {
    return "Hello"
}

greetings().then(result => console.log('***', result))

// async/await

const myFunc = async () => {
    try {
        let result = ''
        result = await displayMessage('Hello')
        console.log(result)
        result = await displayMessage('There?')
        console.log(result)
        result = await displayMessage('Wassup?')
        console.log(result)
        result = await greetings()
        console.log(result)

    } catch (e) {
        console.log(e)
    }

}

myFunc()