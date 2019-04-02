const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myproject'
const ObjectId = require('mongodb').ObjectId
let client = new mongoClient(url,{ useNewUrlParser: true })


class Model{
    static findAll(){
        // return new Promise
        client = new mongoClient(url,{ useNewUrlParser: true })

        return client.connect()
        .then(data=>{            
            const db = client.db(dbName)
            
            // return db.collection('books').insertOne({isbn:"123-123-1234-12-1", title:"judul bukunya", author:"penciptanya", category:"kategorinya", stock:15})
    
            return db.collection('books')
                .find({})
                .toArray()
        })
        .catch(err=>{
            console.log(err)
            client.close()
        })
        // client.close()
    }

    static findOne(idBook){
        client = new mongoClient(url,{ useNewUrlParser: true })

        return client.connect()
        .then(data=>{
            const db = client.db(dbName)
                
            return db.collection('books')
                .find({_id:ObjectId(idBook)})
                .toArray()
        })
        .catch(err=>{
            console.log(err)
            client.close()
        })
        // client.close()
    }

    static create(data){
        client = new mongoClient(url, { useNewUrlParser:true})
        return client.connect()
        .then(datas=>{
            const db = client.db(dbName)
            
            return db.collection('books').insertOne({isbn:data.isbn, title:data.title, author:data.author, category:data.category, stock:data.stock})
        })
        .catch(err=>{
            console.log(err)
            client.close()
        })
    }
    
    static delete(idBook){
        client = new mongoClient(url,{ useNewUrlParser: true })

        return client.connect()
        .then(data=>{
            const db = client.db(dbName)
                
            return db.collection('books')
                .findOneAndDelete({_id:ObjectId(idBook)})
        })
        .catch(err=>{
            console.log(err)
            client.close()
        })
        // client.close()
    }

    static update(idBook, buku){
        client = new mongoClient(url,{ useNewUrlParser: true })

        return client.connect()
        .then(data=>{
            const db = client.db(dbName)
            
            return db.collection('books')
                .findOneAndUpdate({_id:ObjectId(idBook)}, {$set: {isbn:buku.isbn, title:buku.title, author:buku.author, category:buku.category, stock:buku.stock}}, {returnOriginal:false})
        })
        .catch(err=>{
            console.log(err)
            client.close()
        })
    }
}

module.exports = Model