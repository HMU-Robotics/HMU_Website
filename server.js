const bodyParser = require('body-parser')
const path = require('path')
const app = require("./api/app")
const express = require("express")


app.use(bodyParser.json());

app.use(express.static('client/build'))
app.use(express.static('dashboard/build'))


app.get('/api/*',(req,res) =>{
    console.log("dashboard sendfile")
    res.sendFile(path.resolve(__dirname,'dashboard','build','index.html'))
})

app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

app.use((req,res,next)=>{
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status||500)
    res.json({
        error:{
            message : error.message
        }
    })
})


const PORT = process.env.PORT
app.listen(PORT)
console.log("Listening at 4000 port")