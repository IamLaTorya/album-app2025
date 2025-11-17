//export router
const express = require('express')
const router = express.Router()
const port = process.env.port || 3000

//HOME PAGE => http://localhost:3000
router.get('/', (req, res)=>
{
    res.render('pages/home', 
    {
        title: 'album-app home',
        name: "LaTorya's Album App"
    })
})

//Artist-Form => http://localhost:3000/artist-form
router.get('/artist-form', (req, res)=>
{
    res.render('pages/artist-form', 
        {
            title: 'artist-form',
            name: 'artist-form'
        }
    )
})

//Root route => http://localhost:3000/api
router.get('/api', (req, res)=>
{
    //res.send('album api')//this checks to see if the api works
    res.json(
    {
        'All Albums': `http://localhost:${port}/api/album`,
        'All Artists': `http://localhost:${port}/api/artist`,
        'All Bands': `http://localhost:${port}/api/band`,
        'All Labels': `http://localhost:${port}/api/label`
    })
})

const endpoints = 
[
    'album',
    'artist',
    'band',
    'label'
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
    // .send('<h1>404 Error This page does not exist!</h>')
    .render('pages/error', 
    {
        title: 'Error Page',
        name: 'Error'
    })
})
module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     