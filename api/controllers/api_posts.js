const mysql = require("mysql2")
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

exports.find_post = async(req,res,next) => {
    const {id} = req.params
    db.execute('SELECT * FROM `post` WHERE `id` = ?', [id],(err,result) => {
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(409).json("Invalid input")

        }
        else{
            res.status(200).json({
                message: "Post found",
                Item: result[0]
            })
        }
    })
}

exports.get_latest_posts = async(req,res,next) => {
    db.execute('SELECT * FROM `post` WHERE `id` = 1', (err,result) => {
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(404).json("Posts not Found")
        }
        else {
            res.status(200).json({
                message: "Latest Posts found",
                Item: result[0]
            })
        }
    })
}
