const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const path = require('path')
const app = require("./api/app")
const express = require("express")


app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:"secret"
    })
)

app.use(express.static('client/build'))

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


const PORT = process.env.PORT || 4000
app.listen(PORT)
console.log("Listening at 4000 port")