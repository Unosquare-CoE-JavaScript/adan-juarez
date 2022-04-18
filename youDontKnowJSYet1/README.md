# You don´t know JS yet: Get Started

>  ## Chapter 1: What is JS?

"use strict" in the first line of the file .js extension to avoid some compilations errors.

JS can works with functional and OOP paradigm together but today is more frequently the use of functional
programming. 

JS is backward compatibility which means make any change in a program cannot cause conflicts with other JS versions.
Also you can make use of transformations such as BABEL.

JS is parsing language which means it is parsed before it is executed after theres no errors syntax before converts into a 
binary compile program.

>  ## Chapter 2: Surveying JS

- Value: Is the most fundamental unit of information in a program. 
    values are data and they´re how the programme maintains state.
    values come in: *** primitive, object *** 
    
    *** Primitive types: ***
    ```javascript
    String: Use with "", '', or concatenate with ´´ => e.g ´el texto es ${nombre}´
    Number: 22, 3.14.16
    Boolean: false or true [Just have 2 possible values]
    bigint: For large numbers => e.g. 3.1415161312111009....
    null/undefined: indicates empty value [It´s better to use undefined for safetest purpose]
    Symbol:
    ```
    *** Object: ***
   
    Array: Is a special type of object which comprised of an ordered and numerically indexed list of data,
    Starts with index [0].
    e.g. 
    ```javascript
     const names = ["Sasha", "Anastasia", "Elena", "Katia"]
                        names[0], names[1], names[2], names[3]
    names.length //Each element is separated by comma. This method counts the elements in the array
    and return the total elements. In this case the total elements are 4.

    ```
    If we want the first element we do: names[0], this bring "Sasha"
    If we want the last: names[3] => Katia

    * JS arrays can hold any value types, primitive or object.

    Object: 
        An object is an important concept in JS. Differenciate with an array, is an unordered, keyed collection of
        various values no mmatter its type. 
        e.g. 
    ```javascript
        const data = {
            first: "John",
            last: "Lennons",
            age: 80,
            isAlive: false,
            bands: ["The Quarrymen", "The Beatles", "Plastic Ono Band"]
        }

        The way of access a location in an object is using (.):
            // We want the first name
            <h1>{data.first}</h1> // it shows John as a h1 html element
            // If we want the full name
            <h2>{´My name is: ${data.first} ${data.last}´}</h2>
           It will show My name is John Lennon

    ```

To know which value type is used. We can do:
    "typeof" reserved word in any value. E.g.
```javascript
    typeof 42;   //number
    typeof true  //boolean
```
    Be Careful: For arrays and null values typeof return "object" type

    - Cohersion: Convert from one type to another. e.g. String to Number



##### **** Declaring and using variables ****

A variable is a container for values and must be declared/created.

Variables can be created or declared as:

    var name; //Can be assigned later in the program.
    var name = "Paul McCartney" //In this case name has initial value assigned "Paul McCartney"
    
    There are another way

    let name; //Can be assigned later in the program.
    let name = "Paul McCartney" //In this case name has initial value assigned "Paul McCartney"

    The main difference betwwen var and let is the access to that variable. This is known as "Block Scoping"

    E.g. 
```javascript
        var adult = true;

    // Code block
        if(adult){
            var name = "Quetzalcoatl";
            let age = 39;
        }

```
console.log(name); When we console.log, it prints "Quetzalcoatl"
    instead console.log(age); It brings an error as let is just accesible from the if block,
    and let only words within that code block and has a block-scoped.

Block scoping can limit how widespread variable declarations are in a programme, which helps 
prevent accidental overlap of their names. Let has blcok-scoped while var has a wider scope.

We have another way of declaring a variable by using "const". E.g.
    const isMyBirthday = false; //It declares a constant value

    if(isMyBirthday) myBirthday = true; // it returns an error

    This is because a constant is not allowed to be re-assigned.
    So isMyBirthday always is false.

There are 3 types of declaring a variable by using:

var name   //has wider scope and can have an initial value.
let name    //has less scope(block-scope) and can have an initial value.
const name //This kind of value cannot be re-assigned, use const with a primitive value.

There are other forms to declare variables in various scopes.
 ```javascript
    function study(language){
    console.log(´Please study ${language}´)
}
study("Japanese") //It prints Please study Japanese
```

*In this case we can use the study() function and refer the value "language" to that function,
but the parameter can only accessible for that function scope.
study and language are behaved as var-declared.

Another way is making use of the syntax try/catch.

```javascript
try{
    somethingInTheWay()
} catch(err){
    console.log(err)
}
```
    
The err is a block-scoped variable that only exist inside the catch, as if it had been declared with let.

##### **** Functions ****
    - Definitions:
       1. In the world of functional programming: in this context, a function has a mathematical definition and implies a strict set of rules.
       2.  In JS: A collection of statements that can be invoked one or more times, may be provided some inputs, and may give back one or more outputs. This concept is related to the term: "procedure"

A function definition in JS looks like and its declaration statement
e.g.
```javascript
    function awesomeFunction(strangerThings) {
        //...
        return happensWhenYouAreComingToTheTrees;
    }
```
In contrast we have a function expression, it means we can assign a function to a variable and then 
access to it. 
e.g.
```javascript
    let saintSeiya = function(yourFavouriteSaga){
        //...
        return lostCanvasNeedAFinal;
    }
```
JS functions are a special type of the object value type. *** JS treat functions as values, that's essential for the functional programming pattern. ***

You can receive any number of parameters, but the recommendation is to use within 2 to 3 and manage one or two tasks outputs per function.

You can return values using:
```javascript
    return. e.g
    function greetingAFriend(friendName) [
        return `Hello,${friendName}!`;
    ]
    
```
To save taht function example into a variable:
```javascript

    var greeting = greetingAFriend("Shiryu")
    console.log(greeting) //output: Hello, Shiryu
```
or do it by simple console the function with its parameter

```javascript
    console.log(greetingAFriend("Shiryu")) //output: Hello, Shiryu
```

If you have more values to return, in case you have more functions with different inputs and/or outputs you can make use or an object. e.g
```javascript
    var startConversation = {
        greeting() {
            console.log("Hello")
        },
        question() {
            console.log("What´s your name?")
        },
        answer() {
            console.log("My name is Seiya")
        }
    }

    //And access to it as you access and object element: 
    startConversation.greeting(); //Hello!
```

There are other ways to declare a function
  1. Generator function declaration. 
```javascript
    function *two(){...}
```
  2. Async function declaration.
```javascript
    async function three() {...}
```
   3. Async generator function declaration
```javascript
    async function *four() {...}
```
   4. Named function export declaration (ES6 modules)
```javascript
    export function five() {...}
```
For function expressions:
```javascript
    IIFE(function(){ .. })();(functionnamedIIFE(){ .. })();/
    asynchronous IIFE(asyncfunction(){ .. })();(asyncfunctionnamedAIIFE(){ .. })();
    // arrow function expressions
    var f;f=() =>42;f=x => x*2;f=(x) => x*2;f=(x,y) => x*y;f=x => ({ x:x*2});f=x => {returnx*2; };
    f = async x => {vary=await doSomethingAsync(x);returny*2;};
    someOperation( x => x*2);// ..
```
Take into account arrow functions are the handle "this" keyword.
Arrow functions are anonymous which means the syntax doesn't provide a way to provide a direct name
identifier for the function


##### **** Comparisons ****
Programs often requires comparing values to determine their identity and relationship to each other.
In JS we have several mechanisms to do that.

 1. Equal...ish
   a. Equality comparison
        You make use or "tripe-equals" === operator,
        also means "strict equality" operator.
        
```javascript
    3 === 3.0 //true
    "yes" === "yes" //true
    null === null //true
    false === false //true

    42 === "42" //false
    "hello" === "Hello" //false
    true === 1 //false
    0 === null //false
    "" === null //false
    null === undefined //false
```

*** This strict equality refers to check both the value and the type of the value ***
e.g.

```javascript
    42 === "42" //false
```
42 is a Number while "42" is a string, so that is why returns false after compare both types.

=== syntax is designed to lie in two cases of special values:

```javascript
NaN === NaN  //false
0 === -0     //false
```

TIP: A better comparison and practice is to avoid NaN and -0 comparisons are:
```javascript
NaN === Number.isNaN(..)
0 === Object.is(..)
```
*** Object.is(..) is the really strict as represent ==== 4 equals *** 

    b. Identity equality (This means JS only check objects as reference identity)
```javascript
[ 1, 2,3 ] === [ 1,2,3 ]   //false
{ a: 42} === { a: 42}      //false
(x => x*2) === (x => x * 2) //false
```
    * This term is using more when we want to compare object values(non-primitives)
```javascript

    var x = [ 1,2,3 ]

    var y = x

    y === x  //true
    y === [ 1, 2, 3 ] // false
    x === [ 1,2,3 ]  //false
```  
The first case is true as y variable contains exactly what x.
The other cases marks false as they are comparing to different arrays content.

 2. Coercive Comparisons
  Coercion means a value of one type being converted to its respective representation in another type(to whatever extent possible). And it's a core pillar in JS language

In order to compare value types and allow type convertion. We can consider:
e.g.

```javascript
    42 == "42"  //true}
    1 == true   //true
```

Instead of loose equality, the operator (==) should be described as *** coercive equality ***.
So in the example above, value types are different, so in this case (==) operator allows convertion, so 
"42" and 1 are converted to numbers before the comparison.

But what's the better approach to compare and avoid coercion when is no needed?

It´s a better idea to use relational comparison operators like <, > (and even <= and >=).
Just like (==)  they allow coercion before strict comparison.

Consider the examples below:
 
1. 
```javascript
    var arr=["1","10","100","1000"];

    for(let i = 0; i < arr.length && arr[i] < 500; i++) {
        // will run 3 times
        console.log(i)
    }
```
2. 
```javascript
    var x = "10"
    var y = "9"
    x < y; // true

```

Observe the example 1, the variables arr.length and i from the safe comparison i < arr.length are always
numbers. The next comparisons are conver to number befor, so the conditions turn to:
1 < 500, 10 < 500, 100 < 500, 10000 < 500 

Other coercion examples:

```javascript
   var x = 1

   if(x) {
       // will run!
   }
   while(x) {// will run, once! 
        x = false;
   }

   x ? console.log("hello") : console.log("Goodbye")
```
This example is equivalent to

```javascript
   var x = 1
   if(x == true) {
       // will run!
    }
    while(x == true) {
        // will run, once!
        x = false
    }
```
Both examples run, as coercion and strict are applicable to this. 
But in these other:

```javascript
    var x = "hello" 
    if(x) {
        // will run!
    }
    if(x == true) {
        // won't run :(
    }
```
This programme doesn´t work because it doesn´t know what to do.
As is known, coercion mainly convert into numbers, so compare a string 
with a boolean doesn´t match. And also "hello" is not a number hello as
"2" and 2.

```javascript
var x = "hello" 
    if(Boolean(x) == true) {
    // will run
    }
    // which is the same as:
    if(Boolean(x) === true) {
    // will run
    }
```
In this example the best way to do this is in the example above. With the word Boolean the string turns into
Boolean type.

## Organize Javascript
There are two major patterns for organizing code(data and behaviour) and used broadly across the JS ecosystem:
classes and modules.

Understand these patterns will help you to be proficient in JS.

#### **** Classes ****

Class: Is a definition of a type of custom datastructure that includes both data and behaviours that
operate on that data. Class is not a concrete value.

You must instatiate with the (new keyword) one or more times. e.g.

```javascript
    class Saint {
        constructor(name){
            this.name = name
        }

        print(){
           return  console.log(this.name)
        }
    }

    class Constellation {
        constructor() {
            this.saints = []
        }

        addSaint(name) {
            var saint = new Saint(name)
            this.saints.push(saint)
        }

        print() {
            for (let saint of this.saints) {
                saint.print()
            }
        }
    }

    // Create an instance of the class
    var saintConstellation = new Saint()
    saintConstellations.addSaint("Pegaso")
    saintConstellations.addSaint("Virgo")
    saintConstellations.print()
```

In this case data is a string (saint) and the behabiour is addSaint() is the method that instantiates
new Saint() as well as the print method to print all the list items added.

In this case saint and name can be organized together with their behaviours. This mechanismo of the class allows packaging them.

###### **** Classes Inheritance ****

```javascript
    class Publication {
        constructor(title,author,pubDate) {
            this.title = title
            this.author = author 
            this.pubDate = pubDate
        }
        print() {
            console.log(`Title:${this.title}By:${this.author}${this.pubDate}`)
            }
    }

    To inherit properties(data) and methods to other classes and extend their properties and methods,
    we use the "extends" clause.

    class Book extends Publication {
        constructor(bookDetails) {
            super(bookDetails.title, bookDetails.author, bookDetails.publishedOn)
            this.publisher = bookDetails.publisher
            this.ISBN = bookDetails.ISBN;
        }
        //override print method and use super.print() to invoke the inherited method
        print() {
            super.print();
            console.log(`Publisher:${this.publisher} ISBN:${this.ISBN}`);
        }
    }
    
    class BlogPost extends Publication {
        constructor(title,author,pubDate,URL) {
            super(title,author,pubDate)
            
            this.URL = URL;
        }
        print() {
            super.print()
            console.log(this.URL)
            }
    }
```

So Book and BlogPost, we initialized the constructor properties of parent class, so in this case
both classes are inherited from Publication. Which means Book and BlogPost are sub-classes or child-classes.
And now is possible to extend properties and methods with the parent class properties and methods.

To use these classes.
```javascript
var YDKJS = new Book({
    title:"You Don't Know JS",
    author:"Kyle Simpson",
    publishedOn:"June 2014",
    publisher:"O'Reilly",
    ISBN:"123456-789"
})
// And we print the data using print method on the parent

YDKJS.print() 
// Title: You Don't Know JS By: Kyle Simpson June 2014 Publisher: O'Reilly ISBN: 123456-789
    var forAgainstLet = newBlogPost(
        "For and against let","Kyle Simpson","October 27, 2014","https://davidwalsh.name/for-and-against-let");forAgainstLet.print();
        // Title: For and against let By: Kyle Simpson October 27, 2014 https://davidwalsh.name/for-and-against-let
```

*** Inheritance is a powerful tool for organizing data/behavior inseparate logical units (classes), but allowing the child class to cooperate with the parent by accessing/using its behavior and data. ***

#### **** Modules ****
The most clear difference within classes and modules are the syntax as both has the same purposes,
to manage data and behaviour together into logical units.

###### Classic Modules (ES6)

Module factories
```javascript
//factory functions
function Publication(title,author,pubDate) {
    var publicAPI = {
        print() {
            console.log(`Title:${title}By:${author}${pubDate}`);
        }
    }
    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(bookDetails.title,bookDetails.author,bookDetails.publishedOn)
    var publicAPI = {
        print() {
            pub.print()
            console.log(`Publisher:${bookDetails.publisher}ISBN:${bookDetails.ISBN}`)
            }
        }
    return publicAPI
}
function BlogPost(title,author,pubDate,URL) {
    var pub = Publication(title,author,pubDate)

    var publicAPI = {
        print() {
            pub.print()
            console.log(URL)
        }
    }
    return publicAPI;
}
```

In this example as in the class example. There are some differences:

1. The methods and data are access as identifier variables in scope, without using "this"
2. We are applying the module factory function, we can explicitly create and return an object with any publicly exposed methods, this are implicitly public, while any other data or other unreferenced methods remain private.

There are other variations to this factory function in JS programs such as: AMD(Asynchronous Module Definition),
UMD(Universal Module Definition) and CommonJS(classic Node.js-style modules). 

e.g.

```javascript
var YDKJS = Book({
    title:"You Don't Know JS",
    author:"Kyle Simpson",
    publishedOn:"June 2014",
    publisher:"O'Reilly",
    ISBN:"123456-789"
})

YDKJS.print();// Title: You Don't Know JS By: Kyle Simpson June 2014 Publisher: O'Reilly 
//ISBN: 123456-789varforAgainstLet=BlogPost("For and against let","Kyle Simpson","October 27, 2014","https://davidwalsh.name/for-and-against-let");

forAgainstLet.print();// Title: For and against let By: Kyle Simpson October 27, 2014 https://davidwalsh.name/for-and-against-let

```

In the example below we used ("instantiation") of this module factory functions. 
And the main difference is the omision of the new keyword.

###### ES Modules

The main difference is that you don´t need to instantiate as classes and classic modules is that
you don´t need to instantiate,its enough touse imports and exports

```javascript
publication.js

function printDetails(title,author,pubDate) {
    console.log(`Title:${title}By:${author}${pubDate}`)
}

export function create(title,author,pubDate) {
    var publicAPI={
        print() {
            printDetails(title,author,pubDate)
        }
    }
    returnpublicAPI
}
```

```javascript
blogpost.js

import{ create as createPub } from "publication.js"

function printDetails(pub,URL) {
    pub.print();console.log(URL)
    }

export function create(title,author,pubDate,URL) {
    var pub = createPub(title,author,pubDate)
    var publicAPI={
        print() {
            printDetails(pub,URL)
        }
    }

    return publicAPI
}
```

To use this module, we import it into main.js
```javascript

import{ create as newBlogPost } from "blogpost.js"

var forAgainstLet = newBlogPost("For and against let","Kyle Simpson","October 27, 2014","https://davidwalsh.name/for-and-against-let")

forAgainstLet.print();// Title: For and against let// By: Kyle Simpson// October 27, 2014// https://davidwalsh.name/for-and-against-let
```
Note that as keyword is optional, is use to rename the create export from blogpost.js and note 
how to use newBlogPost method name instead of creat.

> ## Chapter 3: Digging to the Roots of JS

### *** Iteration ***
Iteration is a pattern is a data structure which suggest a "standard" to consuming data from a source one 
*** chunk at a time. *** The idea is to iterate the data source, to progressively handle the
collection of data by processing the first part, then the next and so on, rather than handling the 
entire set all at once.

This pattern is a way of processing data which programmes are made is a standard way of processing
data iteratively.

JS introduces this pattern inside the language. JS community creates a protocol that defines a next()
method whose return is an object called and iterator result; the object has * value * and * done * properties,
where done is a boolean that is false until the iteration over the underlying data source is complete.
next() function will be covered with the generators in JS later.

To consume iterators, we use ES6 mechanisms: 

1. for ..of loop
   e.g

```javascript
var it = [10, 20, 30]  //data
//loop over for its results one at a time
for(let val of it){
    console.log(`Iterator value:${val}`)
}

//returns 
// Iterator value: 10
// Iterator value: 20
// Iterator value: 30
//..
```

2. Another mechanism with has a relevant usage, is the "..." operator. This operator has two symmetrical forms:
   spread and rest(or gather). This spread form is an iterator-consumer.

   To spread an iterator, you need something to spread into. In JS, exists two ways of doing this.
   An array or an argument list for a function call. E.g.

```javascript
//Array spread
var vals = [ ...it ]

// each iterated value ocuppied and array element position


```
A function call spread:

```javascript
function doSomethingUseful(catch, enter, participated) {
    //.....
}

doSomethingUseful( ...it )

```
##### *** Iterables ***

The *** iterator-consumption protocol *** is technically defined for consuming iterables.
An Iterable: value that can be iterated over.

This protocol creates an iterator instance automatically from an iterable, and consumes 
* just the iterator instance. * This means a single iterable could be consumed more than once and
each time, a new iterator instance would be created and used.

So, some examples of iterables are array, strings, maps, sets, they are basic data structure/collection.
E.g.
```javascript

//We can also iterate the characters in a string one at a time.

var greetings = "Hello world"
var getGreetingsChar = [ ...greetings ]

// output -> ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!" ]

```
Another example is the * Map * data structure. Map uses objects as keys, associating a value(any type)
with that object. Maps have different default iteration than seen here, in that the iteration is not just over the map´s values but instead its entries.

* An entry is a tuple(2-element array) including both a key and a value. E.g.
  
```javascript
// given two DOM elements, `btn1` and `btn2`
var buttonNames = new Map();
buttonNames.set(btn1,"Button 1");
buttonNames.set(btn2,"Button2");

for(let [btn,btnName] of buttonNames) {
  btn.addEventListener("click",function onClick(){
  console.log(`Clicked${btnName}`)
  })
}
```
In the example below we use array destructuring as [btn, btnName] to separate
the tuple with its respective key value pairs (btn1,"Button 1") and (btn2,"Button 2").

To call only its values, we can made use of:

```javascript
for(let btnName of buttonNames.values()) {
    console.log(btnName)
}// Button 1// Button 2

```

if we want the * index * and * value *
```javascript
var arr = [10,20,30]

for(let[idx,val] of arr.entries()) {
    console.log(`[${idx}]:${val}`)
}
// [0]: 10// [1]: 20// [2]: 30
```

*** All the JS built-in iterables have three iterator forms available: keys-only(keys()), values-only(values()), and entries(entries()) ***

### *** Closure ***

Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

To do a closure:
- Is part of the nature of a function only, means objects don´t get closures.
- To observe a closure, you must execute a function in a different scope where that function was originally defined.

e.g.
1. 
```javascript
function greeting(msg) {
    return function whoIs(name) {
        console.log(`${msg},${name}!`)
    }
}

var hello = greeting("Hello")
var howdy = greeting("Howdy")

hello("Kyle") //hello, Kyle!
hello("Grant") // Hello, Sarah!

howdy("Grant") //Howdy, Grant!
```

2. 
```javascript
function counter(step=1) {
    var count = 0
    return function increaseCount(){
        count = count + step
        return count
    }
}

var incBy1 = counter(1)
var incBy3 = counter(3)
incBy1();// 1
incBy1();// 2
incBy3();// 3
incBy3();// 6
incBy3();// 9
```
In example (1) the greeting(..) outer function is executed first, creating an instance of the inner function
who(..); that function closes over the variable * msg *,  which is the parameter from the outer scope of greeting(..) . When that inner function is returned, its reference is assifned to the hello variable in the outer scope. 

Greetings is call for the second time , creating a new inner function instance, with a new closure over a new msg, and return that reference to be assigned to howdy. 

In this case greeting execute first and when it finishes to run, The "msg" still preserve and it doesn´t be removed from memory, th inner function who() instances are still alive, means can be assigned to hello and howdy, respectively and their closures are still preserving the msg variables.

Closures are a direct link and preservation of the variable´s value; it means closure can actually observe (or make) updates to these variables.

In the second example, each instance of the inner function increasCount() is closed over both "count" and
"step" variables from its outer counter() function´s scope. Step is assigned the 1 value, so there is its value, but count is updated on each invocation of that inner funcition.

Closures are more common in asynchronous code, such as callbacks. Eg.

* Callbacks are functions that receive another function as argument.

```javascript
function getSomeData(ur,) {
    ajax(url, function onResponse(resp){
        console.log(
            `Response (from${url}):${resp}`
        )
    })
}

getSomeData("https://some.url/wherever");
// Response (from https://some.url/wherever): ...
```

The onResponse() function preserve and remember url parameteruntil the Ajax call returns and executes onResponse() and the url parameter keeps alive in the closure for as long as needed.

Closures can not be necessary an outer scope function. 

```javascript

for(let [idx, btn] of butons.entries()) {
    btn.addEventListener("click", function onClick(){
        console.log(`Clicked on button (${idx})!`)
    })
}
```
This loop is using let declarations each iteration gets new block-scoped(aka, local) idx and btn variables;
the loop also creates a new inner onClick(..) function each time. The closure is not over the value in this case as the 
examples above( 1 and 2), but over the the variable idx itself.

Another way of using closure is using a map or reduce methods to iterate over an array. 

###### *** this keyword ***
The this keyword words different in JS functions than OOP in other languages. 
Functions has another characteristic besides their scope that influences what they can access. This characteristic is 
described as and * execution context * and it´s exposed to the function via its "this" keyword.

Execution context is dynamic, entirely dependent on how it is called (regardless of where it is defined or even called from).
this is a dynamic characteristic thst´s determined each time the function is called.

We can see the execution context as a tangible object whose properties are made availbale to a function while it executes.
E.g.

```javascript
function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`)
  };}
var assignment = classroom("Kyle");
```

classroom function makes no reference to a this keyword. Bt the inner study() function does reference this, ahich makes it a
this - aware function (a function that is dependent on its execution context).

In example above there is no variable named topic and thus no such property on the global object, this.topic resolves to undefined. Observe the code example above.

```javascript
function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`)
  };}

var assignment = classroom("Kyle");

var homework = {topic:"JS", assignment: assignment};

homework.assignment()

//or with a call() method is a third way to invoke a function
var otherHomework={topic:"Math"};
// this.topic resolves to "Math"
assignment.call(otherHomework);
```

In the example above a copy of the assignment function reference is set as a homework.assignment(). The function call wil be the homework object. So in this case this.topic resolve "JS".

this-aware function invoked three different ways, gives different answers each time for what object this will reference.
In this way you can use it to re-use a single function with data from different objects because its dynamice context.

### *** Prototypes ***
Prototype is a characteristic of an object, specifically resolution of a property access.
Prototype is a linage between two objects. The prototype linkage occures when an object is created; it´s linked to another object that already exists.

Prototype chain: A series of objects linked together via prototypes.

```javascript
Object.prototype object 

//e.g
var homework = {
    topic: "JS"
}
```
This object has a default prototype linkage that connects to the Object.prototype object.

##### *** Object Linkage ***

Define an object prototype linkage. We can use * Object.create() * utility.
E.g.

```javascript
var homework = {
    topic: "JS"
}

var hw = Object.create(homework)

hw.topic // "JS"

```
The prototype chain is following the next order of execution: 
1. hw
2. homework --> topic: "JS"
3. Object.prototype() --> toString()

Consider the previous example: 

```javascript
homework.topic //JS

otherHW.topic // JS is delegated here

otherHW.topic = "Math"
otherHW.topci // Math

//If we call homework.topic again JS is called as Math is a non-delegated value for homework
homework.topic //JS
```

The execution of this is as follows:

1. otherHW --> topic: "JS" is shadowing the property of the same name, that´s why we can assign "Math"
2. homework --> topic

With the prototype-delegated the use of the this keyword is possible to maintain the dynamic context.

```javascript
//single homework object
var homework = {
    study() {
        console.log(`Please study${this.topic}`)
    }
}

// we declare two variable with two objects
var jsHW = Object.create(homework)
jsHW.topic = "JS"
jsHW.study() //Pliease study JS

var mathHW = Object.create(homework)
mathHW.topic = "Math"
mathHW.study() //Please study Math
```
In this case the two objects each of them are prototype link to the homework object. So, in this case
when call the function study() they assign its own topic property.

###### **** Prototypal classes ****

> ## Chapter 4: The Bigger Picture

The JS language has 3 fundamental pillars:

###### **** Pillar 1: Scope and Closure ****

Scope: buckets that contain variables at are accesible at one level higher/outer or lower/inner are inaccessible.
We go deeper when see hoistin: when all variables declared anywhere in a scope are treted as if they are declared at the 
beginning of the scope and also with var-declared variables are function scoped.

Closure: A closure is when a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in other scopes, it mantains access to its original scope variables.

###### **** Pillar 2: Prototypes ****
It allows you to create objects directly and explicitly.s

###### **** Pillar 3: Types and Coercion ****

The way JS manage types.
