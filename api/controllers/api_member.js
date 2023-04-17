const mysql = require("mysql2")
const path  = require("path")
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


exports.find_member = async(req,res,next)=>{
    const { id } = req.params
    db.execute('SELECT * FROM `member` WHERE `academic_id` = ?',[id],(err,result)=>{
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(409).json("Invalid Input")
        }
        else{
            res.status(200).json({
                Message:"Member found",
                Item:result[0]
            })
        }
    })
}


exports.find_all_members = async(req,res,next)=>{
    db.execute('SELECT * FROM `member`',(err,result)=>{
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(404).json("Members not found")
        }
        else{
            res.status(200).json({
                Message:"Members found",
                Item:result
            })
        }
    })
}