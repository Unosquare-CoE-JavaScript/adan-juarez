### Asynchronous: Allow execute many tasks while one/others are executed.

setTimeout --> the function in setTimeout is a function

setTimeout(function() {
        console.log("Start of code")

        alert("Notice")
    , 100})

callback --> works well to code asynchronous. It´s an important parent.

- Is very performant.
- Eliminates code blocking.
- Disadvantage: It can be difficult to understand and harder to write.

We must use asynchronous for web responses, repeated tasks, or we awaited for some information.
### Synchronous: Execute a program line by line.

- Easy to write and to reason about.
- Disadvantage: May create blocking code.
- Less performant

### Event loop

When one action is performant, the loop is following and the queu of pending message are executed.

Te promises fit event loop.

### Callback

To execute asynchronous code. A callback is a function that is invoke or call when something else happens.

###### Problems with callbacks
1. Callback Hell: Nested callbacks, it is difficult to reason about. 
2. Difficult to reason about.
3. Inversion of control.



#### Promises

An object with properties and methods
Represents the eventual competion(or failure) of an asynchronous operation.
Provides a resulting value.

Create a promise with new Promise():

1. Use the promise constructor
2. Pass a callback(resolve, reject) - two functions

Example: 
![Promise with new Promise()](https://img.shields.io/github/stars/mouredev/Weekly-Challenge-2022-Swift?label=Repositorio%20público%20retos%20Swift/iOS&style=social)](https://github.com/mouredev/Weekly-Challenge-2022-Swift)

##### Fetch
Is define in hte JS window object

#### Async/await 

It can only be used inside an async function.
It awaits for a promise
It causes the async function to pause.

#### Generators

Provide an interesting pattern.

A way to write code in a part and then later.
Passes code in the generator function.
 
## *** Watch examples ***
Paste in the browser the location of the html file

callback.js --> 