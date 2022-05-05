## Functional Programming
    - Is programming with functions
  
## What is a function? Mathematical.
    -A single-value collection of pairs.
    Every value of a domain corresponds one of a range.

## Functions
### Total

For every input corresponds an output.

```javascript
    function inc(i){
        if(i === 0) return 1
        if(i === 1) return 2
        if(i === 2) return 3
    }
```
### Deterministic

Always receive the same output for a given input(Realiability)
```javascript
const timeSince = comment => {
    const now = new Date()
    const then = new Date(comment.createdAt)
    return getDifference(now, then )
}

const getDifference = (now, then) => {
    const days = Math.abs(now.getDate() - then.getDate())
    const hours = Math.abs(now.getHours() - then.getHours())
    return (days, hours)
}
```
### No observable side-effects

No observable effects besides computing a value.

# Composition

```javascript
const add = (x, y) => x + y
const toUpper = str => str.toUpperCase()
const exclaim = str => str + '!'
const first = xs => xs[0]
// composition e.g
const compose = (f,g) => x => f(g(x))
const shout = compose(exclaim, toUpper)

console.log(shot('tears))
```

Explanation: 
    In this example, the compose function return another function which means we can re-use 
    functions.

```javascript
//add more composition
const shout = compose(first, compose(exclaim, toUpper))

// You can use compose from randa package but in this case compose is from right to left

//example with composition
const doStuff = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase()
)
// example without composition
const doStuff = str => 
    str
    .toLowerCase().split(' ')
    .map(c => c.trim())
    .reverse()
    .filter(x => x.length > 3)
    .join('')
```

### Functer


Examples available in:

Programme´s exercises of the course:
(codepen) [https://codepen.io/drboolean/pen/OJJOQMx?editors=1010]

Programmes of the course: 
(codepen) [https://codepen.io/casbahfur/pen/BaYoQpK?editors=1112]