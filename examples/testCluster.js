process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster')
const crypto = require('crypto')
const express = require('express')
const app = express()
const { Worker } = require('worker_threads')


app.get('/', (req, res) => {
    const worker = new Worker(function () {
        //stringify function declaration
        this.onmessage = function () {
            //what we invoke when the postMessage() executed
            let counter = 0
            while(counter < 1e9) {//10 + nine 0 
                counter++
            }
            postMessage()
        }
    })
    //onmessage
    worker.onmessage = function (message) {
        console.log(message.data)
        res.send('' + message.data)
    }
    //postmessage
    worker.postMessage(counter)
})

app.listen(4003)