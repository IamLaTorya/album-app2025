//Build Server
const express = require('express')
const server = express()
const port = process.env.port || 3000

//Handle Security
const helmet = require('helmet')
const cors = require('cors')

//configuring helmet
//server.use(helmet())
server.use(helmet.contentSecurityPolicy(
{
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives:
    {
        "ing-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

server.listen(port, ()=> console.log('The Dodgers won the 2025 World Series!!')) 