const myFile = require('./myFile')

console.log("Hello")

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // Check one: Any pending setTimeout, setInterval, setInmediate
    // Check two: Any pending OS tasks? (Like server listening to port)
    // Check three: Any pending long running operatins? (Like fs modules)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// this while simulates an event-loop example
//Entire body executes in one 'tick'
while(shouldContinue()) {

    // 5 steps of execution in an event loop.
    
    // 1) Node looks at pendingTimers and sees if any functions are ready to be called

    // 2) Node looks at pendingOSTasks and pendingOperations
    // and calls relevant callbacks

    // 3) Pause execution. Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - atimer is about to complete

    // 4) Look at pendingTimers. Call any setInmediate
    // 5) Hanlde any 'close' events
}

//exit back to terminal