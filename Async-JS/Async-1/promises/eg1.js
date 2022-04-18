var MAINAPP = (function(nsp) {
    "use strict"

    let url = 'https://jsonplaceholder.typicode.com/'

    let p1 = fetch(url + 'posts/') 
                .then(response1 => response1.json())
    let p2 = fetch(url + 'comments/') 
                .then(response2 => response2.json())
    let p3 = fetch(url + 'todos/') 
                .then(response3 => response3.json())
     let p4 = Promise.reject('Testing Static Methods')

Promise.allSettled([p1, p2, p3, p4])
    .then(msg => {
       console.log(msg[0])
       console.log(msg[1])
       console.log(msg[2])
       console.log(msg[3])
    })
    .catch(err => console.log(`Problem retrieving data: ${err}`))

    //We have one response. With multiple promises but we only need that one is fulfill
    Promise.any([p1, p2, p3, p4])
    .then(results => {
       console.log(results)
    })
    .catch(err => console.log(`Problem retrieving data: ${err}`))

    return nsp
})(MAINAPP || {})