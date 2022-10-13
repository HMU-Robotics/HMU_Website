const mysql = require("mysql2")
const path = require("path")

const db =  mysql.createPool({
    host:process.env.DB_HOST || "localhost",
    user:process.env.DB_USER || "HMU",
    password:process.env.DB_PASSWORD || 'password',
    database:process.env.DATABASE || 'HMU_ROBOTICS_CLUB',
});

exports.get_dashboard = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/Dashboard.html'))
}