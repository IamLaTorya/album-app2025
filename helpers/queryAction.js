const queryAction = (obj, e, r, t)=>//object is the response, error, rows, table
{
    if (!e)//if there is not an error, then
    {//open if statement
        if (r.length === 1)//if rows.length is strict equal to 1, then
        {//open if statement
            obj.json(...r)
        }//close if statement
        else
        {//open if statement
            obj.json(r)
        }//close if statement
    }//close if statement
    else//if there is an error, then
    {//open else statement
        console.log(`DAO Error: ${e}`)
        obj.json(
        {
            "message": 'error',
            'table': `${t}`,
            'error': error
        })
    }
}

module.exports = 
{
    queryAction
}