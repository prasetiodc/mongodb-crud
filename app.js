const express = require('express')
const bodyPaser = require('body-parser')
const route = require('./route')
const port = 3000

let app = express()

app.use(bodyPaser.urlencoded({extended:false}))
app.use(bodyPaser.json())

app.use('/', route)

app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON ${port}`)
})