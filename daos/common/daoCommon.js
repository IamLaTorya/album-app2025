//import dbconfig
const connect = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const daoCommon = 
{
    //create methods that will query the database
    findAll: (req, res, table)=>
    {
        //.query(sql query, callback function)
        connect.query(
            `SELECT * FROM ${table};`,
            (error, rows)=>
            {
                queryAction(res, error, rows, table)
                // if (!error)//if there is no error
                // {
                //     if(rows.length === 1)
                //     {
                //         res.json(...rows)
                //     }
                //     else
                //     {
                //         res.json(rows)
                //     }
                // }
                // else//if there is an error
                // {
                //     console.log(`Dao Error: ${error}`)
                //     res.json(
                //     {
                //         "message": 'error',
                //         'table': `${table}`,
                //         'error': error
                //     })
                // }
            }
        )
    },
    findById: (res, table, id)=>
    {
        connect.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=>
            {
                queryAction(res, error, rows, table)
                // if (!error)
                // {
                //     res.json(...rows)
                // }
                // else
                // {
                //     console.log(`DAO Error: ${error}`)
                //     res.json(
                //     {
                //         "message": 'error',
                //         'table': `${table}`,
                //         'error': error
                //     })
                // }
            }
        )
    },
    sort: (res, table, sorter)=>
    {
        connect.query(
            `SELECT * FROM ${table} ORDER BY ${sorter};`,

            (error, rows)=>
            {
                queryAction(res, error, rows, table)
                // if (!error)
                // {
                //     if (rows.length == 1)
                //     {
                //         res.json(...rows)
                //     }
                //     else
                //     {
                //         res.json(rows)
                //     }
                // }
                // else
                // {
                //     console.log(`DAO Error: ${error}`)
                //     onsole.log(`DAO Error: ${error}`)
                //     res.json(
                //     {
                //         "message": 'error',
                //         'table': `${table}`,
                //         'error': error
                //     })
                // }
            }
        )
    },

    create: (req, res, table)=>
    {
        // console.log(req)
        // res.send('complete')
        if(Object.keys(req.body).length ===0)
            //Object.keys(obj) => array of keys
        {
            res.json(
            {
                "error": true,
                "message": "No fields to create"
            })
        }
        else
        {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
            connect.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=>
                {
                    if (!error)
                    {
                        res.json(
                        {
                            Last_id: dbres.insertId
                        })
                    }
                    else
                    {
                        console.log(`${table}Dao error: `, error)
                    }
                }
            )
        }
    }
}

module.exports = daoCommon