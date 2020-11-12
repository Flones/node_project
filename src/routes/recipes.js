const recipes = require('express').Router()

recipes.get('/', (req, res)=>{
    console.log('All recipes')
    res.end('End')

})

recipes.get('/all/:type', (req, res)=>{
    console.log('All recipes', req.params.type)
    // si url= /all/:type?filter=apero
    if (req.param('apero') !== undefined)
        console.log('Add filter', req.param('apero'))

    res.end('End')

})

module.exports = recipes;