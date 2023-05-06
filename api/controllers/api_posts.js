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


// finds Post based on Post ID retrieved from url
exports.find_post = async(req,res,next) => {
    const {id} = req.params
    db.execute('SELECT * FROM `post` WHERE `id` = ?', [id],(err,post) => {
        if(err) throw err
        console.log(post)
        if(post.length == 0){
            res.status(409).json("Invalid input")
        }
        else{
            db.execute('SELECT * FROM `postImages` WHERE `post_id` = ?',[id],(err,images)=>{
                if(err) throw err
                console.log(images)
                if(images.length == 0){
                    res.status(206).json({
                        Message:"Post found but no Image Info",
                        Post:post[0]
                    })
                }
                else{
                    res.status(200).json({
                        Message:"Post and Images found",
                        Post:post[0],
                        Images:images
                    })
                }
            })
        }
    })
}

// finds 10 latest news posts for News Carousel
exports.get_latest_posts = async(req,res,next) => {
    db.execute(`
        SELECT p.*, GROUP_CONCAT(pi.img) AS img
        FROM post p
        LEFT JOIN postImages pi ON p.id = pi.post_id
        WHERE p.type = 'News'
        GROUP BY p.id;
    `, (err,result) => {
        if(err) throw err
        console.log(result)
        if(result.length == 0){
            res.status(404).json("News not Found")
        }
        else {
            res.status(200).json({
                Item: result
            })
        }
    })
}


// finds All Projects with their data for Project Carousel
exports.get_projects = async(req,res,next) => {
    db.execute(`
        SELECT p.*, GROUP_CONCAT(pi.img) AS img
        FROM post p
        LEFT JOIN postImages pi ON p.id = pi.post_id
        WHERE p.type = 'Project'
        GROUP BY p.id;
        `
        ,   (err,result) => {
            if(err) throw err
            console.log(result)
            if(result.length == 0){
                res.status(404).json("Projects not Found")
            }
            else {
                res.status(200).json({
                    Item: result
                })
            }
        }
        )
}


// finds All Seminars with their data for Seminar Carousel
exports.get_seminars = async(req,res,next) => {
    db.execute(`
        SELECT p.*, GROUP_CONCAT(pi.img) AS img
        FROM post p
        LEFT JOIN postImages pi ON p.id = pi.post_id
        WHERE p.type = 'Seminar'
        GROUP BY p.id;`
        ,   (err,result) => {
            if(err) throw err
            console.log(result)
            if(result.length == 0){
                res.status(404).json("Seminars not Found")
            }
            else {
                res.status(200).json({
                    Item: result
                })
            }
        }
        )
}