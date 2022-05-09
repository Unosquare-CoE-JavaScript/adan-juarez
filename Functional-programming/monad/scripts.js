const fs = require('fs')

const Right = x => ({
    map: f => Right(f(x)),
    inspect: `Right(${x})`,
    chain: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: `Right(${x})`
})

const Left = x => ({
    map: f => Left(f(x)),
    inspect: `Left(${x})`,
    chain: f => Left(f(x)),
    fold: (f, g) => f(x),
    toString: `Left(${x})`
})

const fromNullable = x => 
    x!= null ? Right(x) : Left(x)

const findColor = name => {
    const found = {red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]
    return found ? Right(found) : Left('missing')
}

const res = () => 
    findColor('red')
    .map(x => x.toUpperCase())
    .map(x => x.slice(1))
    .fold(
        () => 'no color!',
        color => color
    )

//console.log(res())

const getPort_ = () => {
    try {
        const str = fs.readFileSync('config.json')
        const config = JSON.parse(str)
        return config.port
    } catch(e) {
        return 3000
    }
}

const fromNullable_ = x => 
    x!= null ? Right(x) : Left(x)

const tryCatch = f => {
    try {
        return Right(f(x))
    } catch(e) {
        return Left(e)
    }
}

const readFileSync = path => tryCatch(() => fs.readFileSync(path))

const parseJSON = contents => tryCatch(() => JSON.parse(contents))

const getPort = () => 
    readFileSync('config.json')
    .chain(contents => parseJSON(contents))
    .map(config => config.port)
    .fold(() => 8080, x => x)

const result = getPort()

//console.log(result)

const street = user => 
    fromNullable(user.address)
    .map(address => address.street)
    .fold(() => 'no street', x => x)
