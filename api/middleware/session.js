const mysql = require("mysql2")
const cookieParser = require('cookie-parser')

const db =  mysql.createPool({
    host:process.env.DB_HOST || "localhost",
    user:process.env.DB_USER || "HMU",
    password:process.env.DB_PASSWORD || 'hmuroboticsclub123',
    database:process.env.DATABASE || 'HMU_ROBOTICS_CLUB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const time_to_expire = 60000

module.exports = async(req,res,next)=> {
    if(req.cookies["id_ref"]){
        db.execute('SELECT * from `session` WHERE `data` = ?',[req.cookies["id_ref"]],(err,session)=>{
            if(err) {
                throw err;
                console.log(session)
            }
            let date = new Date()
            if(session.length == 0 ){
                return res.redirect("/auth/adminLogin")
            }else if(+session[0].expires + time_to_expire < +date.getTime()){
                // res.clearCookie("id_ref")
                return res.redirect("/auth/adminLogin")
            }
        })
    }
    next()
} 