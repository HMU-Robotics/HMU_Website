const path = require("path")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mysql = require("mysql2")


  const db =  mysql.createPool({
    host:process.env.DB_HOST || "localhost",
    user:process.env.DB_USER || "HMU",
    password:process.env.DB_PASSWORD || 'hmuroboticsclub123',
    database:process.env.DATABASE || 'HMU_ROBOTICS_CLUB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

exports.login_path = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/Login.html'))
}   


exports.user_login = async(req,res,next) =>{
    db.execute('SELECT * FROM `user` WHERE `email` = ?',[req.body.email],(err,user)=>{
        if(err) throw err;
        console.log(user);
        if(user.length == 0){
            return res.sendFile(path.join(__dirname,'../public/Html/Login.html'))
        }else{
            bcrypt.compare(req.body.password , user[0].password , (err,result)=>{
                if(!result){
                    return res.sendFile(path.join(__dirname,'../public/Html/Login.html'))
                }
                if(result){
                    const token = jwt.sign({
                        email:user[0].email,
                        userId:user[0].id,
                        roles:user[0].role_id,
                    },
                        "superS",
                        {
                            expiresIn:"1h"
                        }
                    )
                    return res.sendFile(path.join(__dirname,'../public/Html/Dashboard.html'))
                }
            })
        }

    })
}