readStream.on('close', () => {
    console.log('Cleanup code´)
})

#### To run the server

Run in the root directory npm i 
Then run npm run dev

#### To run the client 

cd client 

and then: sudo npm i 
- npm start

Check performance with ab in macos and some linux distributions:

in the terminal run: ab -c 50 -n 500 localhost:port/fast