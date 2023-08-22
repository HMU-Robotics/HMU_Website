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

const find_max_ids = async()=>{
    let count = 0
    db.execute('SELECT `id` from `user` WHERE `id` = (SELECT max(`id`) FROM `user`)',(err,result)=>{
        if(err) throw err
        else count = result
    })
    return count
}

exports.find_user = async(req,res,next)=>{
    const {id} = req.params
    db.execute('SELECT * from `user` WHERE `id` = ?',[id],(err,result)=>{
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(409).json("Invalid input")

        }
        else{
            res.status(200).json({
                message:"User found",
                Item:result[0]
            })
        }
    })
}

exports.find_all_users = async(req,res,next)=>{
        db.execute('SELECT * from `user` ',(err,result)=>{
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(409).json("Invalid input")
        }
        else{
            res.status(200).json({
                Message:"Users found",
                User: result
            })
        }
    })
}

exports.find_number_users = async(req,res,next)=>{
    const {id_1,id_2} = req.params
    db.execute('SELECT * from `user` WHERE `id` BETWEEN ? AND ? ',[id_1,id_2],(err,result)=>{
        if(err) throw err
        console.log(result)
        res.status(200).json({
            Message:"Success",
            Users:result
        })
    })
}


exports.find_eurobots_team = async(req,res,next)=>{
    const eurobot = "Eurobots"
    db.execute('SELECT * FROM `member` WHERE `role` = ?',[eurobot],(err,result)=>{
        if(err) throw err
        console.log(result)
        res.status(200).json({
            Message:"Success",
            Users:result
        })
    })
}