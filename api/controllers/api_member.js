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
    const { id, lang } = req.params
    var language;
    if(lang === "en"){
        language = "english"
    }
    else if(lang === "gr"){
        language = "greek"
    }

    if (id == 1) {
        res.status(403).json('Access denied');
        return;
      }
    db.execute('SELECT * FROM `member` WHERE `academic_id` = ? AND language = ?',[id,language],(err,member)=>{
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
    const { lang } = req.params; 
    var language;
    if(!lang){
        language = null;
    }
    else {
        if(lang === "en") {
            language = "english"
        }
        else if(lang === "gr") {
            language = "greek"
        }
    }
    db.execute('SELECT * FROM `member` LEFT JOIN `memberImages` ON `member`.`academic_id` = `memberImages`.`member_id` WHERE `member`.`academic_id` <> 1 AND member.language = ?',[language] ,(err,result)=>{
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
                        language: row.language,
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
