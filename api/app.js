const express = require("express")
const morgan = require('morgan')
const mysql = require('mysql2')
const api_auth = require("./routes/api_auth")
const api_storage = require("./routes/api_storage")
const api_users = require("./routes/api_user")
const api_dashboard = require("./routes/api_dashboard")
const helmet = require("helmet")
const path = require("path")
const cookieParser = require('cookie-parser');
require('dotenv').config({path: path.resolve(__dirname, '../.env')})



const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



db.connect((err)=>{
    if(err) throw err;
    console.log("Database ready...")
})




const app = express()

app.use(helmet());
app.disable('x-powered-by')
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(helmet());




app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Oring, X-Requested-With, Content-Type, Accept, Authorization')
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods',"PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    next();
})

app.use('/api/auth',api_auth)
app.use('/api/storage',api_storage)
app.use('/api/members',api_users)
app.use('/api/dashboard',api_dashboard)



module.exports = app


