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
    db.execute('SELECT * FROM `member` LEFT JOIN `memberImages` ON `member.academic_id` = `memberImages.member_id` WHERE `member.academic_id` <> 1 AND `member.role` = ?',"eurobots",(err,result)=>{
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(404).json("Members not found")
        } else {
            let members = {}
            result.forEach(row => {
                if (!members[row.academic_id]) {
                    // Create a new member object if we haven't seen this member yet
                    members[row.academic_id] = {
                        fullname_en: row.fullname_en,
                        fullname_gr: row.fullname_gr,
                        academic_id: row.academic_id,
                        first_name: row.first_name,
                        last_name: row.last_name,
                        school: row.school,
                        subscription_date: row.subscription_date,
                        end_date: row.end_date,
                        role: row.role,
                        images: []
                    }
                }
                if (row.img) {
                    // Add the image to the member object if it exists
                    members[row.member_id].images.push({
                        image_id: row.member_id,
                        image_url: row.img
                    })
                }
            })
            res.status(200).json({
                Message:"Members found",
                Item:Object.values(members)
            })
        }
    })
}