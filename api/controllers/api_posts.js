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
            db.execute(`SELECT * FROM postImages WHERE tag = ?`,[post[0].tag],(err,images)=>{
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


// finds all Posts
exports.get_posts = async (req, res, next) => {
    const { lang } = req.params;
    var language;

    if (lang === "en") {
        language = "english"
    } else if (lang === "gr") {
        language = "greek"
    }

    db.execute(`
        SELECT p.*, pi.img
        FROM post p
        LEFT JOIN postImages pi ON p.tag = pi.tag
        WHERE p.language = ?;
    `, [language], (err, result) => {
        if (err) throw err;
        
        if (result.length == 0) {
            res.status(404).json("Posts not found");
        } else {
            const postsMap = new Map(); // Create a map to group posts by ID
            
            result.forEach(row => {
                const post = {
                    id: row.id,
                    language: row.language,
                    tag: row.tag,
                    title: row.title,
                    post_desc: row.post_desc,
                    content: row.content,
                    created_at: row.created_at,
                    updated_at: row.updated_at,
                    images: [] // Initialize an empty array for images
                };
                
                // Check if the post already exists in the map
                if (!postsMap.has(row.id)) {
                    postsMap.set(row.id, post);
                }
                
                // Add image to the post's images array
                if (row.img) {
                    postsMap.get(row.id).images.push(row.img);
                }
            });
            
            // Convert the map values to an array of posts
            const posts = Array.from(postsMap.values());
            
            res.status(200).json({
                Item: posts
            });
        }
    });
}


// query to get post tags, in order to match postImages to relevant Posts
exports.getPostTag = async(req, res, next) => {
    db.execute("SELECT DISTINCT tag, id FROM post", (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      if (result.length === 0) {
        res.status(404).json("Tags not Found");
      } else {
        res.status(200).json({
          Item: result
        });
      }
    });
  };


