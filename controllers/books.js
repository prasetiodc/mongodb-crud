const model = require('../model/book')

class Book{
    static readAll(req, res){
        model.findAll()
        .then(data=>{    
            res.send(data)
        })
        .catch(err=>{
            res.send(err.massage)
        })
    }

    static readOne(req, res){
        model.findOne(req.params.id)
        .then(data=>{    
            res.send(data)
        })
        .catch(err=>{
            res.send(err.massage)
        })
    }

    static create(req, res){
        let buku = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }

        model.create(buku)
        .then(data=>{    
            res.send(data)
        })
        .catch(err=>{
            res.send(err.massage)
        })
    }

    static delete(req, res){
        model.delete(req.params.id)
        .then(data=>{    
            res.send("Delete Success")
        })
        .catch(err=>{
            res.send(err.massage)
        })
    }

    static update(req, res){
        let buku = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }
        model.update(req.params.id, buku)
        .then(data=>{    
            res.send(data)
        })
        .catch(err=>{
            res.send(err.massage)
        })
    }
}

module.exports = Book