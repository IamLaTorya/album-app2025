const con = require('../../config/dbconfig')

const bandDao = 
{
    table: 'band',

    //methods that are particular to the artist table
    //find albums by artist
    findAlbumsByBand: (res, table, id)=>
    {
        let albums = []
        //this is a query
        let sql = `SELECT album_id, title, yr_released FROM album WHERE artist_id = ${id};`
        //.execute(query, callback function)
        //.execute(query, array, callback function)
        con.execute(
            sql,
            (error, rows)=> 
            {
                if (!error) 
                {
                    Object.values(rows).forEach(obj => 
                    {
                        albums.push(obj)
                    })
                    // console.log(albums)
                    //res.send('success')
                    con.execute(
                        `Select * FROM ${table} WHERE ${table}_id = ${id};`,
                        (error, rows)=> 
                        {
                            rows.forEach(row => 
                            {
                                row.albums = albums
                            })
                            if (!error) 
                            {
                                res.json(...rows)
                            } 
                            else 
                            {
                                console.log('DAO Error:', error)
                            }
                        }
                    )
                }
                else
                {
                    //res.end('error')
                    res.json(
                        {
                            message: 'error',
                            table: `${table}`,
                            error: error
                        }
                    )
                }
            }
        )
    }
}


module.exports = bandDao