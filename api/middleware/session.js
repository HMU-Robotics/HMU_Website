const mysql = require("mysql2")
const cookieParser = require('cookie-parser')
const path = require("path")
require('dotenv').config({path: path.resolve(__dirname, '../../.env')})


const db =  mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const time_to_expire = 1000 * 60 * 60 * 1 //1 hours
module.exports = async(req,res,next)=> {
    if(req.cookies["id_ref"]){
        await db.execute('SELECT * from `session` WHERE `data` = ?',[req.cookies["id_ref"]],(err,session)=>{
            let date = new Date()
            console.log(session)
            if(session.length == 0){
                return res.status(404)
            }else if(+session[0].expires + time_to_expire < + date.getTime()){
                res.clearCookie("id_ref")
                res.clearCookie("id")
                return res.status(404)
            }else{
                return res.status(200).json({
                    member_id: session[0].member_id
                })
            }
        })
    }
} 