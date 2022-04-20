process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster')
//const crypto = require('crypto')
//const express = require('express')
//const app = express()
/* // Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed again but in child mode
    cluster.fork() //make it fast, but overdrive it 
   
} else {
    // I´m a child, I´m going to act like a server and do nothing else
    const express = require('express')
    const app = express()
    function doWork(duration) {
        const start = Date.now()
        while (Date.now() - start < duration) { }
    }

    app.get('/', (req, res) => {
        doWork(5000)
        res.send('Hi there')
    })

    app.get('/fast', (req,res) => {
        res.send('This was fast')
    })

    app.listen(3008)
}
 */

if (cluster.isMaster) {

    cluster.fork()
} else {
    const crypto = require('crypto')
    const express = require('express')
    const app = express()

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there')
        })
    })

    app.get('/fast', (req, res) => {
        res.send('This was fast')
    })

    app.listen(3009)
}