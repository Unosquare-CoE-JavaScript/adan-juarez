process.env.UV_THREADPOOL_SIZE = 5
//libuv: whrever creates a thread_pool indicates the size of 3
const crypto = require('crypto')

const start = Date.now()
//console.log(start)
// both execute at the same time
crypto.pbkdf2('a', 'b', 1000000, 512, 'sha512' , () => {
    console.log('1: ',  Date.now() - start)
})

crypto.pbkdf2('a', 'b', 1000000, 512, 'sha512' , () => {
    console.log('2: ',  Date.now() - start)
})

crypto.pbkdf2('a', 'b', 1000000, 512, 'sha512' , () => {
    console.log('3: ',  Date.now() - start)
})

crypto.pbkdf2('a', 'b', 1000000, 512, 'sha512' , () => {
    console.log('4: ',  Date.now() - start)
})

crypto.pbkdf2('a', 'b', 1000000, 512, 'sha512' , () => {
    console.log('5: ',  Date.now() - start)
})