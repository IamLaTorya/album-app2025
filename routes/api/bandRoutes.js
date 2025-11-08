const router = require('express').Router()

const { bandDao : dao } = require('../../daos/dao')

//http://localhost:3000/api/band
router.get('/', (req, res)=>
{
    //dao.findAll(req, res, dao.table)//callback function
    dao.findAll(req, res, dao.table)
})

router.get('/get_albums/:id', (req, res)=>
{
    dao.findAlbumsByBand(res, dao.table, req.params.id)
})

//http://localhost:3000/api/band/sort/:sort
router.get('/sort/:sorter', (req, res)=>
{
    dao.sort(res, dao.table, req.params.sorter)
})

//http://localhost:3000/api/:id
router.get('/:id', (req, res)=>
{
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router