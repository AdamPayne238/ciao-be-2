require('dotenv').config()

const server = require('./server')
const options = { port: process.env.PORT || 4500 }

server.start(options, ({ port }) => {
    console.log(`No Errors on PORT: ${port}`)
})