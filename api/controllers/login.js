const path = require("path")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mysql = require("mysql2")
const cookieParser = require('cookie-parser')
const express = require("express")
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



exports.user_login = async(req,res,next) =>{
    db.execute('SELECT * FROM `user` WHERE `email` = ?',[req.body.email],(err,user)=>{
        if(err) throw err;
        console.log(user);
        if(user.length == 0){
            res.status(409).json("Invalid input")
        }else{
            bcrypt.compare(req.body.password , user[0].password , (err,result)=>{
                if(!result){
                    return res.status(405).json({
                        message:"Auth failed"
                    })
                }
                if(result){
                    const token = jwt.sign({
                        email:user[0].email,
                        userId:user[0].id,
                        roles:user[0].role_id,
                    },
                        "superS", //secret MUST change
                        {
                            expiresIn:"1h"
                        }
                    )
                    let date = new Date()
                    db.execute('DELETE FROM `session` WHERE `member_id` = ?',[user[0].id],(err,user)=>{
                        if(user){
                            console.log("DELETED SESSION")
                            console.log(user)
                        }
                        if(err) {
                            throw err;
                            console.log(err)
                        }
                        
                    })
                    db.execute('INSERT into `session`(member_id,expires,data) VALUES (?,?,?)',[user[0].id,date.getTime(),token],(err,user)=>{
                        if(user){
                            console.log("INSERT SESSION")
                            console.log(user)
                        }
                        if(err) {
                            throw err;
                            console.log(err)
                        }
                    })
                    res.cookie('id_ref',token)
                    res.cookie('id',user[0].id)
                    return res.status(200).json({
                        message:"Auth successful",
                        id:user[0].id,
                        token:token
                    })
                }
            })
        }

    })
}