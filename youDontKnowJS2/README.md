# Scope & Closures

> ### Scope
Scope is primarily determined during compilation. We need to understand this part.

In classic compiler theory, a program is processed by a complier in three basic stages:

1. Tokenizing/Lexing
2. Parsing
3. Code Generation
   
JS specification does not require "compilation" explicitly, it requires behaviour that is essentially only practical with a compile-then-execute approach.

Exist three characteristics you can observe to prove it: 

1. Syntax errors
2. Early errors
3. Hoisting

```javascript
//Syntax error
var greeting = "Hello"

console.log(greeting)

greeting = ."Hi";// SyntaxError: unexpected token .
```

```javascript
//Early errors
console.log("Howdy")

saySomething("Hello","Hi")
// Uncaught SyntaxError: Duplicate parameter name not// allowed in this context
function saySomething(greeting,greeting) {
    "use strict"
    console.log(greeting)
}

```
In strict mode as shows above you cannot repeat variables or parameters names. This marks an early error.
And the code must first be fully parsed before any execution occurs.

```javascript
//Hoisting

function saySomething() {
    var greeting = "Hello"
    {
        greeting = "Howdy";// error comes from here
        let greeting = "Hi" 
        console.log(greeting)
    }
}

saySomething();// ReferenceError: Cannot access 'greeting' before// initialization
```

Example (1):

```javascript
var students = [{ id:14, name:"Kyle"},{ id:73, name:"Suzy"},{ id:112, name:"Frank"},{ id:6, name:"Sarah"}]

function getStudentName(studentID) {
    for(letstudentofstudents) {
        if(student.id==studentID) {
            returns tudent.name
        }
   }     
}

getStudentName(73)
```

#### Targets
To check if a variable is a target has an assigned value, if not it is a source.

Check Example (1)

There are five targets, the first and the is the students object, the second one is 
the for loop which assigns a value to student, the third is when you call the getStudentName(73).

The function(studentID) is handled a compliation. The association between geStudentName and the function is
automatically set up at the beginning of the scope rather than waitin for an "=" assignment statement to be executed.

* This is known as hoisting, se more below to this term in profound.
  
### Sources
The sources of the Example (1) are:

students in the for loop, in the comparison if statement, both student.id and studentID and getStudentName and
console.log are source references.

id, name and log are properties not variables, so that it doesn´t apply sources vs targets.

> #### Lexical scope
Lexical scope refers to the first stage of compilation (lexing/parsing)

```javascript
// outer/global scope: RED
var students=[{ id:14, name:"Kyle"},{ id:73, name:"Suzy"},{ id:112, name:"Frank"},{ id:6, name:"Sarah"}]

function getStudentName(studentID) {
    // function scope: BLUE
    for(let student of students) {
        // loop scope: GREEN
        if(student.id == studentID) {
            return student.name
        }
    }
}

var nextStudent = getStudentName(73)
console.log(nextStudent);// Suzy
```

#### Nested scope

Now analyzing the code below we can understand scope with separate colors: 
RED as global scope: Global scope is use in three variables --> students, getStudentName, nextStudent
BLUE as function scope: encompasses thhe scope of the function getStudentName(), which holds only one identifier which is the
parameter "studentID".
and GREEEN as loop scope: Encompasses the scope of the for loop which only holds the variable student.

We check the term "implied scopes" terms to exactly locate the scope in any case as technically BLUE has not studentID.

This steps are determined by its compilation.

To understand the scope in a better way. We start with a conversation metaphore within 

1. Engine: responsible for start-to-finish compilation and execution of our JS program.
2. Comppiler: Handles all the dirty work of pasring and code-generation.
3. Scope manager: Collects and maintains a lookup list of all the declared variables/identifiers, and enforces a sset of rules as to how these are accessible to currently executing code.
   
Take the Example (1) again.

The way JS process the program. Start with the first statement.

1. The array and its contents are just basic JS value literals (this unaffected by any scoping concerns).
2. The var students = [...] declaration assignment parts. JS treats these as two distinct operations, one which Compiler (during compilation), and Engine(during its execution). In the Compiler step the program is break down into tokens, then wil be parse into a tree(AST).

Theres not all, we analyze the communication, we analyze the parts of the conversation metaphore.

Compiler steps: 
Compiler asks Scope Manager(of the global scope) I found a formal declaration for an identifier called students, have you ever heard of it?

The global (scope manager) response nope, never heard of it. So I just created for you.
Then start ask scope manager it they heard one by one every of the variables global, functions, for loop...

As a question-and-answer conversation. If the answer is not found, the scope manager creates it on behalf of it. But if yes it follows checking until theres nothing for the scope manager to do.

Then the conversation follows with the Engine and the Scope manager. It starts by checking targets and sources.
This happens another question-and-answer. 

Think scope as a building with the global scope at the top of the building, if scope resolveres a target or source variable reference by lfirst looking on the current floor, if theres nothing it takes the elevator to the next floor, until it finishe an there´s nothing more to check in the scope.


> #### Chapter 3: Scope chain

Scope chain is the connection between scopes that are nested within other scopes.

Consider:

```javascript
var special = 42

function lookingFor(special) {
    var another = {
        special:special
    }
    
    function keepLooking() {
        var special = 3.141592
        
        console.log(special)
        console.log(another.special);// Ooo, tricky!
        console.log(window.special)
    }
    keepLooking()
}

lookingFor(112358132134);// 3.141592// 112358132134// 42
```
special: special is copying the value of the special parameter variable into another container (a property of the same name).

```javascript
var askQuestion = function ofTheTeacher() {
    "use strict"
    ofTheTeacher = 42 // TypeError//..
}
askQuestion()// TypeError
```

Because we used strict-mode, the assignment failure is re-ported as a TypeError; in non-strict-mode, 
such an assign-ment fails silently with no exception.What about when afunctionexpression has no name identifier?

```javascript
var askQuestion = function(){
    // ..
}
```
A function expression with a name identifier is referred toas a “named function expression,” but one without a name identifier is referred to as an “anonymous function expression.” Anonymous function expressions clearly have no name identifier that affects either scope.

*** When we created a function (declaration or expresssion) is defined, a new scope is created. The position of scopes nested inside one another creates a natural scope hierarchy throuughout the program, called the scope chain. ***

Scope chain controls variable access, directionally oriented upward and outward.

##### Arrow functions case

Arrow functions are lexically anonymous, meaning they have no directly related identifier that references the function.
askQuestion creates an inferred name of "askQuestion)

Although this arrow functions has the san scope behaviour as a normal function scope.

##### Shadowing


> #### Chapter 4: Global Scope

Global scope is an essential part of JS scope. How it works?

In browser-executed applications, there are three main ways:

1. Using ES modules
2. Using a bundler such as Webpack: All the files are contatenate in one main file.
3. <script> files

In these ways we can use global scope to make cooperate all of them.

With ES modules we use export and imports

The global scope is also where:

* JS exposes its built-ins:
* The environment hosting the JS engine exposes its own built-ins:
  - console and its methos
  - the DOM
  - timers
  - web platform APIS: navigator, history, geolocation, WebRTC, etc.

Where is the global scope exactly? 

###### Browser "Window"

```javascript
var studentName = "Kyle" 

function hello() {
    console.log(`Hello,${studentName}!`)
}
hello();// Hello, Kyle!
```
In this example we can load a web page by using a <script src="..."> in the markup
So by using:

```javascript
window.hello() //Hello, Kyle
```

We can access as a global scope with the window

* This not always apply in all scenarios.
  
######  Globals Shadowing globals

```javascript
window.something = 42

let something = "Kyle"

console.log(something) // Kyle

console.log(window.something) //42
```

The let decalration adds a somethinf global variable but not a global object property. 
So, the something global object property is shadoes by a lexical identifier.

* Bad practice, instead use var for global scope an us let and const for block scope.
  
###### DOM Globals

Consider 

```html
<ul id="my-todo-list">
    <li id="first">Write a book</li>..
</ul>

first;// <li id="first">..</li>window["my-todo-list"];// <ul id="my-todo-list">..</ul>
```
In html the id property creates an element global variable that references it. 

###### window.name predifined "global" in a browser context
```javascript
var name = 42

console.log(name, typeof name) // "42" string
```

window is pre-defined "global" in a browser context: 
it´s a property on the global object, so it seems like a normal glboal variable.

###### Web workers

Web workers are a web platform extension on top of browser JS behaviout, which allows a JS file to run in a completely separate thread (os wise) from the thread that´s running the main JS program. 

To access in a web worker to the global object reference, we use typically made using self.

```javascript
var studentName = "Kyle"
let studenID = 42

function hello() {
    console.log(`Hello,${self.studentName}!`);
}
```

Here the global scope behaviout is as pure as it gets for running JS programs.

###### Developer Tools Console

Developer tools emulate the behaviour of the global scope position to an extent.
It´s just to meke convinient and useful for a variety of developer activities.

###### ES Modules

The module’s top-level scope is descended from the global scope, almost as if the entire contents of the module were wrapped in a function

To make use of this. E.g.

```javascript
var studentName = "Kyle"

function hello() {
    console.log(`Hello,${studentName}!`)
}

hello();// Hello, Kyle!

export hello;
```

###### Node 

Node threats every single .js file that it loads, including the main one you start the Node process with, as a ESM or CJSM.

* Node programs is never actually the global scope. 

Node threats modules in the module scope.

We have the "global" reference for the global scope object
```javascript
global.studentName = "Kyle"

function hello() {
    console.log(`Hello,${studentName}!`)
}

hello();// Hello, Kyle!

module.exports.hello = hello
```
###### Global this

Another way to get access to reference to the global scope object looks like:

```javascript
const theGlobalScopeObject = (
    new Function("return this")
)()
```

```javascript
const theGlobalScopeObject = 
(typeof globalThis != "undefined") 
 ? globalThis: (typeof global!="undefined")
 ? global: (typeof window != "undefined")
 ? window: (typeof self != "undefined")
 ? self: (new Function("return this"))();
```

In the example above JS ES2020 introduce a standardized reference to the global scope object, called
"globalThis". You can use it instead of any of the other approaches.

#### Chapter 5: The (Not So) Secret lifecycle of variables 

###### Hoisting: Declaration vs Expression
```javascript
greeting() // TypeError

var greeting = function greeting() {
    console.log("Hello!")
}
```

The above error is not a ReferenceError. IT´s a little misconception, in this case
JS is telling us that greeting was found but doesn´t hold a function reference at that moment.

Invoke a non-function value results in an error.

Variables declared with var are also automatically initialized to undefined ath the beginning of their scope again,
the nerarest enclosing function, or the global. Once initialized it´s available thtoughout the whole scope.
###### Hoisting
Function hoisting: A function declaration is hoisted and initialized to its function value.

Variable hoisting, take this example.

```javascript
greeting = "Hello!"
console.log(greeting) // Hello!
var greeting = "Howdy!";
```

In this the identifier is hoisted and it´s automatically initialized to the value undefined from the top of the scope.

The order of hoisting is as follows:

1. function declarations
2. variables are hoisted inmediately after all functions.

So consider this two pieces of code. In the first we can observe a piece of code of JS which works correctly, in the second we
see the same code but on how JS reacommodated by the JS Engine.

```javascript
studentName = "Suzy"
greeting()// Hello Suzy!
function greeting() {
    console.log(`Hello${studentName}!`)
}
var studentName;
```

```javascript
function greeting() {
    console.log(`Hello${studentName}!`)
}
var studentName

studentName="Suzy";
greeting();// Hello Suzy!
```

* Remember hoisting should be used to refer to the compile-time operation of generation runtime instructions for the automatic registration of a variable ath the beginning of its scope, each time that scope is entered.
  
###### Red-declaration. A variable is declared more than once in the same scope?
E.g.

```javascript
var studentName = "Frank"
console.log(studentName)// Frank

var studentName
console.log(studentName)// ???
```

In this case re-declaration is not allowed and the programme won´t be executed.

```javascript
let studentName = "Frank"

console.log(studentName)

let studentName = "Suzy";
```

The only way to re-declare a variable is by using the var for its two or more declarations.

#### Constants

The const keyword cannot be repeated with the same identifier in the same scope.
The first reason why const cannot be re-declare is because const requires a variable and create variables that cannot
be re-assigned. E.g.

```javascript
const empty;// SyntaxError 

//const declarations create variables that cannot be re-as-signed:
const studentName = "Frank"

console.log(studentName)// Frank 
studentName="Suzy";// TypeError
```

###### Re-declaration in loops
```javascript
var keepGoing = true

while(keepGoing) {
    let value = Math.random()
    if(value > 0.5) {
        keepGoing = false
    }
}
```

"All the rules of scope (including "re-declaration" of let created variables) are applied per scope instance.
In other words, each time  a scope is entered during execution, every thing resets.

It means each loop iteration is its own new scope instance, and within each scope instances, value is only being declared once.

In JS once the excution starts const, let and var keywords are effectively removed from the code. They´re handled entirely by the compiler.

* With var, the variable is "hoisted" to the top of its scope. Instead they can make use of shadowing
* The period of time from the entering of a scope to where the auto-initialization of the variable occurs is known as 
  Temporal Dead Zone(TDZ) and also is more describe as the time window where a variable exists but is still uninitialized.

> ### Chapeter 6: Limiting scope exposure

When variables used by one part of the program are exposed to another part of the program, via scope, there are three main hazards that often arise:

* Naming Collisions
* Unexpected Behavior
* Unintended Dependency
  
Inmediately Invoked Function Expression (IIFE): is pattern when a function expression that´s then inmediately invoked. Is a full function.

An IIFE is useful when we want to create a scope to hide variables/functions. Since it´s an expression, it can be used in any place in a JS program where an expression is allowed. 

Founction Boundaries: control an outer loop or block.

* If the code you need to wrap a scope around has return, this, break, or continue in it, an IIFE is probably not the best approach. In this case, you might look to create the scope with a block instead of a function.
  
```javascript
{
    // not necessarily a scope (yet)
    // ..
    // now we know the block needs to be a scope
    let thisIsNowAScope = true
    
    for(leti=0; i<5; i++) {
        // this is also a scope, activated each
        // iteration
        if(i % 2 == 0) {
            // this is just a block, not a scope
            console.log(i)
        }
    }
} // 0 2 4
```

{ .. } curly-brace pairs create blocks cannot be all. To be elegible to become scopes are:

  * Object literals use { .. } curly-brace pairs to delimit their key-value lists, but such object values are not scopes.
  * class uses { .. } curly-braces around its body definition, but this is not a block or scope.
  * A function uses { .. } around its body, but this is not technically a block-it´s a single statement for the function body. It is, however, a (function) scope.
  * The { .. } curly-brace pair on a switch statement (around the set of case clauses) does not define a block/scope.
  
Explicit block scope:

```javascript
function getNextMonthStart(dateStr) {
    var nextMonth, year;
    {
        let curMonth
        [ , year, curMonth ] = dateStr.match(
            /(\d{4})-(\d{2})-\d{2}/
            )||[]
            nextMonth = (Number(curMonth) %1 2) + 1
    }
    if(nextMonth == 1) {
        year++
    }
    return`${year} - ${String(nextMonth).padStart(2,"0")}-01`
}

getNextMonthStart("2019-12-25");// 2020-01-01
```
The scopes and their identifiers:

1. The outer/global scope has one identifier, the function getNextMonthStart( .. )
2. The function scope for getNextMonthStart(..) has three: dateStr(parameter), nextMonth, and year.
3. The { .. } curly-brace pair defines an inner block scope that includes one variable: curMonth.

curMonth is only needed for those first two statements, so we just declare in that scope where is necessary.

##### var and let
The way you must choose which one to use is "What is the most minimal scope exposure that´s sufficient for this variable?".

var is reccommend it for(mostly) only top-level function scope means that most other declarations should use let, if the declaration belongs in the function scope use var.

let: if a declaration belongs in a block scope.

```javascript
function diff(x,y) {
    if(x > y) {
        // `tmp` is still function-scoped, but
        // the placement here semantically
        // signals block-scoping
        var tmp = x
        x = y 
        y = tmp
    }
    return y - x
}
```

```javascript
for(let i = 0; i < 5; i++) {
    // do something
}

//The only case you must  use var is when a break;
var lastI

for(let i = 0; i < 5; i++) {
    lastI = i
    if(checkValue(i)) {
        break
    }
}

if(lastI < 5) {
    console.log("The loop stopped early!")
}
```

```javascript
try{
    doesntExist()
} catch(err) { 
    console.log(err)
    // ReferenceError: 'doesntExist' is not defined// ^^^^ message printed from the caught exception
    let onlyHere = true
    var outerVariable = true
}

console.log(outerVariable)// true

console.log(err);// ReferenceError: 'err' is not defined// ^^^^ this is another thrown (uncaught) exception
```
The err variable declared by the catch clause is block-scoped to that block. This catch clause block can hold other block-scoped declarations via let. But a var declaration inside this block still attaches to the oute function/global scope.

```javascript
try{
    doOptionOne()
} catch{ // catch-declaration omitted
    doOptionTwoInstead()
}
```
In this new form catch can be omitted. 

Function Declaration in Blocks (FiB): function declarations that appear directly inside blocks

```javascript
if(false) {
    function ask() {
        console.log("Does this run?")
    }
}

ask();
```

1. The ask()call might fail with a ReferenceError exception, because the ask identifier is block-scoped to the if block scope and thus isn’t available in the outer/-global scope.
2. The ask() call might fail with a TypeError exception, because the ask identifier exists, but it’s undefined(since the if statement doesn’t run) and thus not a callable function.
3. The ask() call might run correctly, printing out the “Does it run?” message.

e.g. (1)
```javascript
if(typeof Array.isArray != "undefined") {
    function isArray(a) {
        return Array.isArray(a)
    }
} else{
    function isArray(a) {
        return Object.prototype.toString.call(a) == "[object Array]"
    }
}
```

e.g. (2)
```javascript
if(true) {
    function ask() {
        console.log("Am I called?")
    }
}
if(true) {
    function ask() {
        console.log("Or what about me?")
    }
}
```

e.g. (3)
```javascript
for(let i = 0; i < 5; i++) {
    function ask() {
        console.log("Or is it one of these?")
    }
}
ask()

function ask() {
    console.log("Wait, maybe, it's this one?")
}
```
Examples (2) and (3) are FiB examples for browsers and non-browser JS environments

> ### Chapter 7: Using Closures

##### Closure 
Is one of the most important language characteristics ever invented in programming, it underlies major programming paradigms, including Functional Programming (FP), modules, and even a bit of class-oriented design. Getting comfortable with closure is required for mastering JS and effectively leveraging many important design patterns throughoutyour code.

Closure is a behaviour of functions and only functions. If you aren´t dealing with a function, closure does not apply.
An object cannote have closure, nore does a class have closure.
* Only functions have closure.

Remember scope colors in previous texts:
- Global scope: RED
- function scope: BLUE
- 2° function scope: GREEN

```javascript
// outer/global scope: RED(1)
function lookupStudent(studentID) {
    // function scope: BLUE(2)
    var students = [{ id:14, name:"Kyle"},{ id:73, name:"Suzy"},{ id:112, name:"Frank"},{ id:6, name:"Sarah"}];
    return function greetStudent(greeting){
        // function scope: GREEN(3)
        var student = students.find(student => student.id == studentID)
        return`${greeting},${student.name}!`}
    }
    
    var chosenStudents = [
        lookupStudent(6),
        lookupStudent(112)
    ]

// accessing the function's name:
chosenStudents[0].name
// greetStudent
chosenStudents[0]("Hello")
// Hello, Sarah!
chosenStudents[1]("Howdy");// Howdy, Frank!
```

The first thing to notice about this code is that the lookup Student(..) 
outer function creates and returns an inner function called greetStudent(..).
lookupStudent(..) is called twice, producing two separate instances of its inner greetStudent(..)
function, both of which are saved into the chosen Students array. We verify that’s the case by checking the.nameproperty of the returned function saved in chosenStudents[0], and it’s indeed an instance of the inner greetStudent(..). After each call to lookupStudent(..) finishes, it would seem like all its inner variables would be discarded and GC’d(garbage collected). 
The inner function is the only thing that seems to be returned and preserved. But here’s where the behavior differs in ways we can start to observe. While greetStudent(..) does receive a single argument as the parameter named greeting, it also makes reference to both students and studentID, identifiers which come from the enclosing scope of lookupStudent(..). Each of those references from the inner function to the variable in an outerscope is called a closure.

In academic terms, each instance of greetStudent(..) closes over the outer variables students and studentID.

```javascript
function adder(num1) {
    return function addTo(num2){
        return num1 + num2
    }
}
var add10To = adder(10)
var add42To = adder(42)

add10To(15)// 25
add42To(9) // 51
```

In the example above function save its own num1 variable with values 10 and 42 respectively, those num 1 assignations still there and we re-use the, when we call the variable and assign variables 25 and 51 respectively. With the preserve value and the new assignation, the function complete its execution is sum both numbers.

But actually, every time the outer adder(..) function runs, a new inner addTo(..) function instance is created, and for new each instance, a new closure. 
So every add10To instance has its own closure, the same for add42To instances have its own one closure.

##### Common closures: Ajax and Events
Closure is most frequently with callbacks (A function that receives a function as an argument)

```javascript
function lookupStudentRecord(studentID) {
    ajax(`https://some.api/student/${studentID}`,
    functionon Record(record) {
        console.log(`${record.name}(${studentID})`)
    })
}

lookupStudentRecord(114)// Frank (114)
```

In this example isstudentID still around and accessible to thecallback. This is because a Closure.

```javascript
function say(myName) {
    var greeting = "Hello"
    output()
    function output() {
        console.log(`${greeting},${myName}!`)
    }
}
say("Kyle");// Hello, Kyle!
```

In the example above the inner function output() accesses the variables greeting and myName from its enclosing scope. But the invocation of output() happens in that same scope, where of course greeting and myName are still available; that’s just lexical scope, not closure.

Global scope doesn´t result in a closure.

If there’s no function invocation, closure can’t be observed:

```javascript
function greetStudent(studentName) {
    return function greeting(){
        console.log(`Hello,${studentName}!`)
    }
}
greetStudent("Kyle");// nothing else happens
```

#### Observable

Closure definition: closure is observed when a function uses variable(s) from outer scope(s) even while running in a
scope where those variable(s) wouldn´t be accessible.

The key parts of this definition are:

- Must be a function involved
- Must reference at least one variable from an outer scope
- Must be invoked in a different branch of the scope chain from the variable(s)

#### The clouusre lifecycle and garbage collection (GC)

Since closure is inherently tied to a function instance, its closure over a variable lasts as long as there is still a reference to that function. 

If ten functions all close over the same variable, and overtime nine of these function references are discarded, the lone remaining function reference still preserves that variable. Once that final function reference is discarded, the last closure over that variable is gone, and the variable itself is GC’d.

This has an important impact on building efficient and performant programs. Closure can unexpectedly prevent the GCof a variable that you’re otherwise done with, which leads torun-away memory usage over time. 
That’s why it’s importantto discard function references (and thus their closures) when they’re not needed anymore.


To to this. Observe the example:

```javascript
function manageBtnClickEvents(btn) {
    
    var clickHandlers = []

    return function listener(cb){
        if(cb) {
            let clickHandler = function onClick(evt){
                console.log("clicked!")
                cb(evt)
            }
        clickHandlers.push(clickHandler)
        btn.addEventListener("click",
        clickHandler)
    }else{// passing no callback unsubscribes
    // all click handlers 
    for(let handler of clickHandlers) {
        btn.removeEventListener("click",handler)
    }
    clickHandlers = []
    }
  }
}

// var mySubmitBtn = ..
var onSubmit = manageBtnClickEvents(mySubmitBtn)

onSubmit(function checkout(evt){
    // handle checkout
})

onSubmit(function trackAction(evt){
    // log action to analytics
});
// later, unsubscribe all handlers:
onSubmit();
```

In this program, the inneronClick(..) function holds a closure over the passed in cb(the provided event callback). That means the checkout() and trackAction() function expression references are held via closure (and cannot be GC’d) for as long as these event handlers are subscribed. When we call onSubmit() with no input on the last line, all event handlers are unsubscribed, and the clickHandlers array is emptied. Once all click handler function references are discarded, the closures of cb references to checkout() and trackAction() are discarded. When considering the overall health and efficiency of the program, unsubscribing an event handler when it’s no longer needed can be even more important than the initial subscription!

* Closure is per variable rather than per scope. Ajax callbacks, event handlres, and all other forms of function closures are typically assumed to close over only what they explicitly reference.
  
```javascript
function storeStudentInfo(id,name,grade) {
    return function getInfo(whichValue){
        // warning:
        //   using `eval(..)` is a bad idea!
        var val = eval(whichValue)
        return val
        }
    }
    var info = storeStudentInfo(73, "Suzy", 87)
    info("name");// Suzy
    info("grade");// 87
```

Notice that the inner function getInfo(..) is not explicitly closed over any of id,name, or grade variables. And yet, calls to info(..) seem to still be able to access the variables, albeit through use of the eval(..) lexical scope. So all the variables were definitely preserved via closure, despite not being explicitly referenced by the inner function.

* Why we use Closures?
  
Code
```javascript
var APIendpoints = {
    studentIDs:"https://some.api/register-students",// ..
    }
    var data = {
        studentIDs:[14,73,112,6],// ..
    }
    function makeRequest(evt) {
        var btn = evt.target
    var recordKind = btn.dataset.kind
    ajax(APIendpoints[recordKind],data[recordKind])
}
// <button data-kind="studentIDs">
//    Register Students
// </button>
btn.addEventListener("click",makeRequest);
```

The makeRequest(..) utility only receives an evt object from a click event. From there, it has to retrieve the data-kind attribute from the target button element, and use that value to lookup both a URL for the API endpoint as well as what data should be included in the Ajax request. This works OK, but it’s unfortunate (inefficient, more confusing) that the event handler has to read a DOM attribute each time it’s fired. Why couldn’t an event handler remember this value? Let’s try using closure to improve the code:

```javascript
var APIendpoints = {
    studentIDs:"https://some.api/register-students",// ..
    }
    var data = {
        studentIDs:[14,73,112,6],// ..
    }
    function setupButtonHandler(btn) {
        var recordKind = btn.dataset.kind
        btn.addEventListener("click",function makeRequest(evt){
            ajax(APIendpoints[recordKind],data[recordKind])
        })
    }
    // <button data-kind="studentIDs">//    Register Students// </button>
    setupButtonHandler(btn);
```

With the setupButtonHandler(..) approach, the data-kind attribute is retrieved once and assigned to the record-Kind variable at initial setup.recordKindis then closed overby the innermakeRequest(..) click handler, and its value isused on each event firing to look up the URL and data thatshould be sent.

Building with the same pattern, we could have looked up both the URL and data once:

```javascript
function setupButtonHandler(btn) {

    var recordKind = btn.dataset.kind
    var requestURL = APIendpoints[recordKind]
    var requestData = data[recordKind]

    btn.addEventListener("click", function makeRequest(evt){
        ajax(requestURL,requestData)}
        )
}
```

Now makeRequest(..) is closed over requestURL and requestData, which is a little bit cleaner to understand, and also slightly more performant.Two similar techniques from the Functional Programming(FP) paradigm that rely on closure are partial application and currying. Briefly, with these techniques, we alter the shape of functions that require multiple inputs so some inputs arep rovided up front, and other inputs are provided later; the initial inputs are remembered via closure. 
Once all input shave been provided, the underlying action is performed. By creating a function instance that encapsulates some information inside (via closure), the function-with-stored-information can later be used directly without needing to re-provide that input. This makes that part of the code cleaner, and also offers the opportunity to label partially applied functions with better semantic names.

We can also improve the code above as:
```javascript
function defineHandler(requestURL,requestData) {
    return functionmakeRequest(evt){
        ajax(requestURL,requestData)
    }
}

function setupButtonHandler(btn) {
    var recordKind = btn.dataset.kind
    var handler = defineHandler(APIendpoints[recordKind], data[recordKind])
    btn.addEventListener("click",handler)
}
```
The requestURL and requestData inputs are provided aheadof time, resulting in the makeRequest(..) partially applied function, which we locally label handler. When the event eventually fires, the final input (evt, even though it’s ignored)is passed to handler(), completing its inputs and triggering the underlying Ajax request. Behavior-wise, this program is pretty similar to the previous one, with the same type of closure. 
But by isolat-ing the creation of makeRequest(..) in a separate utility (defineHandler(..)), we make that definition more reusable across the program. We also explicitly limit the closure scope to only the two variables needed.


The two models for tackling closure:

• Observational: closure is a function instance remembering its outer variables even as that function is passed to and invoked in other scopes.

• Implementational: closure is a function instance and itsscope environment preserved in-place while any references to it are passed around and invoked from other scopes.

Closure can have benefits as:

• Closure can improve efficiency by allowing a function instance to remember previously determined information instead of having to compute it each time.

• Closure can improve code readability, bounding scope-exposure by encapsulating variable(s) inside function instances, while still making sure the information in those variables is accessible for future use. The resultant narrower, more specialized function instances are cleaner to interact with, since the preserved information doesn’t need to be passed in every invocation.

> ##### Module Pattern

##### Encapsulation and Least Exposure (POLE)

* Encapsulation is the bundling or co-location of information(data) and behaviour (functions) that together serve a common purpose.

Component architecture in front-end programming use encapsulation.

##### Module

What is a module? 

Module is a collection of related data and functions (often referred to as methods in this context), it use a division between hidden private details and public accessible details, usually called the "public API".

A module is also stateful: it maintains some information over time, along with functionality to access and update that information.

```javascript
//This is a namespace, not module
var Utils = {
    cancelEvt(evt) {
        evt.preventDefault()
        evt.stopPropagation()
        evt.stopImmediatePropagation()
    },
    wait(ms) {
        return new Promise(function c(res){
            setTimeout(res,ms)
        })
    },isValidEmail(email) {
        return /[^@]+@[^@.]+\.[^@.]+/.test(email)
    }
}
```

```javascript

//Data structures (Stateful grouping) is not a module

var Student = {
    records:[{ id:14, name:"Kyle", grade:86},{ id:73, name:"Suzy", grade:87},{ id:112, name:"Frank", grade:75},{ id:6, name:"Sarah", grade:91}],getName(studentID) {
        var student = this.records.find(student => student.id == studentID)
        return student.name
    }
}

Student.getName(73) // Suzy
```

##### Modules (Stateful Access Control)
```javascript
var Student = (functiondefineStudent(){
    var records = [{ id:14, name:"Kyle", grade:86},{ id:73, name:"Suzy", grade:87},{ id:112, name:"Frank", grade:75},{ id:6, name:"Sarah", grade:91}]
    
    var publicAPI = {
        getName
    }
    return publicAPI
    // ************************
    function getName(studentID) {
        var student = records.find(student => student.id == studentID)
        return student.name
    }
}) ()

Student.getName(73);// Suzy
```

Student is now an instance of a module. It features a publicAPI with a single method:getName(..). This method is able to access the private hidden records data. This is a classical way of doing a module.

##### Module Factory (Multiple instances)
```javascript
// factory function, not singleton IIFE
function defineStudent() {
    var records = [{ id:14, name:"Kyle", grade:86},{ id:73, name:"Suzy", grade:87},{ id:112, name:"Frank", grade:75},{ id:6, name:"Sarah", grade:91}];varpublicAPI={getName}
    return publicAPI
    // ************************
    function getName(studentID) {
        var student=records.find(student => student.id == studentID)
        return student.name
    }
}

var fullTime = defineStudent()

fullTime.getName(73);// Suzy
```

Rather than specifying defineStudent() as an IIFE, we just define it as a normal standalone function, which is commonly referred to in this context as a “module factory” function. We then call the module factory, producing an instance of the module that we label fullTime. This module instance implies a new instance of the inner scope, and thus a new closure that getName(..) holds over records. fullTime.getName(..) now invokes the method on that specific instance.


#### Node modules

```javascript
module.exports.getName = getName
// ************************
var records = [{ id:14, name:"Kyle", grade:86},{ id:73, name:"Suzy", grade:87},{ id:112, name:"Frank", grade:75},{ id:6, name:"Sarah", grade:91}]

function getName(studentID) {
    var student = records.find(student => student.id==studentID)
    return student.name
}

// if we use multiple exports

Object.assign(module.exports,{
    // .. exports ..
});

// instead of
// defining a new object for the API
module.exports = {
    // ..exports..
}

// To import and use the modules

var Student = require("/path/to/student.js") 

Student.getName(73);// Suzy

//Another way is
var getName = require("/path/to/student.js").getName
// or alternately
var { getName } = require("/path/to/student.js")

```


##### Modern ES Modules (ESM)

```javascript
export getName
// ************************

var records = [{ id:14, name:"Kyle", grade:86},{ id:73, name:"Suzy", grade:87},{ id:112, name:"Frank", grade:75},{ id:6, name:"Sarah", grade:91}]

function getName(studentID) {
    var student = records.find(
    student => student.id == studentID)
    return student.name
}

//Other alternatives
export function getName(studentID) {
    // ..
}

export default function getName(studentID) {
    // ..
} // there is just allowe to use one export default per .js file
```

To use it(import it) into another file

```javascript

// with no export default
import { getName } from "/path/to/students.js"

getName(73);// Suzy

// rename the export name
import { getName as getStudentName } from "/path/to/students.js"

getStudentName(73);// Suzy

// With export default
import getName from "/path/to/students.js"

getName(73);// Suzy

//By contrast, the other major variation on import is called “namespace import”

import * as Student from "/path/to/students.js"

Student.getName(73) // Suzy
```

```javascript

```