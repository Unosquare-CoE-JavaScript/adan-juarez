const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./database/connection')
const swaggerui = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

dotenv.config()

const app = express()

dbConnection()

const myMiddleware = (req, res, next) => {
    console.log('Hey Wassup')
    next()
}

// app.use(myMiddleware)

app.use(cors())

//request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/product', require('./routes/productRoutes'))
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentaiton
if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerui.serve,
        swaggerui.setup(swaggerDocument)
    )
}


app.get('/', (req, res, next) => {
    res.send('Hello from Node server')
})


// error handle middleware (global)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is on the port ${PORT}`)
})