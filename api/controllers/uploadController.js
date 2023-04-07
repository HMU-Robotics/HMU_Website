const multer = require("multer")
const sharp = require("sharp")
const mysql = require("mysql2");
const path = require("path");
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


const multerStorage = multer.memoryStorage()

const multerFilter = (req,res,cb)=>{
    //filter
}

const upload = multer({
    storage: multerStorage,
  })

  const uploadFiles = upload.array("upload_img", 10)

  const uploadImages = (req, res, next) => {
    uploadFiles(req, res, err => {
      if (err instanceof multer.MulterError) { // A Multer error occurred when uploading.
        if (err.code === "LIMIT_UNEXPECTED_FILE") { // Too many images exceeding the allowed limit
            console.log(err)
        }
      } else if (err) {
        // handle other errors
            console.log(err)
      }
  
      // Everything is ok.
      next()
    })
}

const resizeImages = async(req,res,next)=>{
    if(!req.files) return next()

    req.body.images = []
    await Promise.all(
        req.files.map(async file=>{
            const newFilename = `image-${Date.now()}-${file.originalname}`
            await sharp(file.buffer)
            .resize(640,320)
            .toFormat("jpeg")
            .jpeg({quality:90})
            .toFile(`./api/public/storage/uploads/posts/${newFilename}`)
            req.body.images.push(newFilename)
        })
    )
    next()
}

const makePost = async(req,res,next)=>{
    const path = "./api/public/storage/uploads/posts"
    db.execute("INSERT INTO `post`(title,content) VALUES(?,?)",[req.body.title,req.body.content],(err,user)=>{
      console.log(req.body)
        if(err) {
            throw err;
        }
  //       db.execute("SELECT `id` FROM post WHERE `title` = ?" , [req.body.title],(err,result)=>{
  //         if(err){
  //           throw err;
  //           console.log(err)
  //         }
  //         let id = result[0].id
  //         console.log(req.body.images)
  //         for(const image in req.body.images){
  //           db.execute("INSERT INTO `postImages`(post_id,img) VALUES(?,?)",[id,req.body.images[image]],(err,result)=>{
  //             if(err){
  //               throw err; //       db.execute("SELECT `id` FROM post WHERE `title` = ?" , [req.body.title],(err,result)=>{
  //         if(err){
  //           throw err;
  //           console.log(err)
  //         }
  //         let id = result[0].id
  //         console.log(req.body.images)
  //         for(const image in req.body.images){
  //           db.execute("INSERT INTO `postImages`(post_id,img) VALUES(?,?)",[id,req.body.images[image]],(err,result)=>{
  //             if(err){
  //               throw err;
  //             }
  //         })
  //       }
  //   })


  // })
  //             }
  //         })
  //       }
  //   })


   })
  
  res.send("created post")
}


const makeMember = async(req,res,next)=>{
  const path = "./api/public/storage/uploads/members"
  // TO DO FIX VALUE NAMES
  db.execute("INSERT INTO `user`(email,first_name,last_name,academic_id,school,subscription,subscription_date,role_id) VALUES(?,?,?,?,?,?,?,?)",[req.body.email,req.body.first_name,req.body.last_name,req.body.academic_id,req.body.school,req.body.subscription,req.body.subscription_date,req.body.role_id],(err,user)=>{
    console.log(req.body)
    if(err) {
        throw err;
    }
      // db.execute("SELECT `id` FROM user WHERE `name` = ?" , [req.body.name],(err,result)=>{
      //   if(err){
      //     throw err;
      //   }
      //   let id = result[0].id
      //   console.log(req.body.images)
      //   for(const image in req.body.images){
      //     // TO DO FIX VALUE NAMES
      //     db.execute("INSERT INTO `memberImages`(post_id,img) VALUES(?,?)",[id,req.body.images[image]],(err,result)=>{
      //       if(err){
      //         throw err;
      //       }
      //   })
      // }
  })


// })

res.send("created member")
}


// this is a test will get deleted
const test = async (req,res,next)=>{
  db.execute("INSERT INTO `test`(email) VALUES(?)",[req.body.email],(err,user)=>{
    console.log(req.body)
    if(err) {
        throw err;
    }
})

res.send("created test")
}



const getResult = async (req, res) => {
    if (req.body.images.length <= 0) {
        console.log("here_1")
      return res.send(`You must select at least 1 image.`);
    }

    console.log("here_3")
  
    const images = req.body.images
      .map(image => "" + image + "")
      .join("");
  
    return res.send(`Images were uploaded:${images}`);
  };





  module.exports = {
    makePost : makePost,
    uploadImages: uploadImages,
    resizeImages: resizeImages,
    getResult: getResult,
    makeMember : makeMember,
    test: test
  }