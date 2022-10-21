const express = require("express")
const morgan = require('morgan')
const mysql = require('mysql2')
const api_auth = require("./routes/api_auth")
const api_storage = require("./routes/api_storage")
const api_users = require("./routes/api_user")
const auth = require("./routes/auth")
const dashboard = require("./routes/dashboard")
const helmet = require("helmet")
const cookieParser = require('cookie-parser');



const db = mysql.createConnection({
    host:process.env.DB_HOST || "localhost",
    user:process.env.DB_USER || "HMU",
    password:process.env.DB_PASSWORD || 'hmuroboticsclub123',
    database:process.env.DATABASE || 'HMU_ROBOTICS_CLUB',
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
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());




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
app.use('/auth',auth)
app.use('/dashboard',dashboard)



module.exports = app


