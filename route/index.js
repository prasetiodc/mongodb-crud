const router = require('express').Router()
const books = require('./books')

router.get('/',(req, res)=>{
    res.send("Home")
})

router.use('/books', books)

module.exports = router