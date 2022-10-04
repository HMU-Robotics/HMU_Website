const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const path = require('path')


const app = express()

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:"secret"
    })
)



app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('client/build'))

app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


const PORT = process.env.PORT || 4000
app.listen(PORT)
console.log("Listening at 4000 port")