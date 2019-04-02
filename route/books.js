const router = require('express').Router()
const books = require('../controllers/books')

router.get('/', books.readAll)

router.get('/:id', books.readOne)

router.post('/', books.create)

router.delete('/:id', books.delete)

router.put('/:id', books.update)


module.exports = router