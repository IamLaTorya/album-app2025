//export router
const express = require('express')
const router = express.Router()
const port = process.env.port || 3000

//Root route => http://localhost:3000/api
router.get('/api', (req, res)=>
{
    //res.send('album api')//this checks to see if the api works
    res.json(
    {
        'All Albums': `http://localhost:${port}/api/album`,
        'All Artists': `http://localhost:${port}/api/artist`,
        'All Bands': `http://localhost:${port}/api/band`
    })
})

const endpoints = 
[
    'album',
    'artist',
    'band'
]

// router.use('/api/album', require('./api/albumRoutes'))
// router.use('/api/artist', require('./api/artistRoutes'))
endpoints.forEach(endpoint =>
{
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

//error handling
router.use((req, res, next)=>
{
    res.status(404)
    .send('<h1>404 Error This page does not exist!</h>')
})
module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     