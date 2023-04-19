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
    db.execute('SELECT * FROM `member` WHERE `academic_id` = ?',[id],(err,member)=>{
        if(err) throw err
        console.log(member)
        if(member.length == 0){
            res.status(409).json("Invalid Input")
        }
        db.execute('SELECT * FROM `memberImages` WHERE `member_id` = ?',[id],(err,image)=>{
            if(err) throw err
            console.log(image)
            if(image.length == 0){
                res.status(206).json({
                    Message:"Member Info found but not Image Info",
                    Member:member[0]
                })
            }
            else{
                res.status(200).json({
                    Message:"Member found and Image Info",
                    Member:member[0],
                    Image:image[0]
                })
            }
        })

    })
}


exports.find_all_members = async(req,res,next)=>{
    db.execute('SELECT * FROM `member` LEFT JOIN `memberImages` ON `member`.`academic_id` = `memberImages`.`member_id`', (err,result)=>{
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(404).json("Members not found")
        } else {
            let members = {}
            result.forEach(row => {
                if (!members[row.member_id]) {
                    // Create a new member object if we haven't seen this member yet
                    members[row.member_id] = {
                        member_id: row.member_id,
                        name: row.name,
                        images: []
                    }
                }
                if (row.image_id) {
                    // Add the image to the member object if it exists
                    members[row.member_id].images.push({
                        image_id: row.image_id,
                        image_url: row.image_url
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
