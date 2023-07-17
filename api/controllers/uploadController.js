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

// resizes images that are sent via form to server
const resizeImages = async(req, res, next, type) => {
  if (!req.files) return next();

  req.body.images = [];
  let resizeDimensions;
  if(type === 'member') {
    resizeDimensions = {width: 400, height: 400};
  }
  else if(type === 'post') {
    resizeDimensions = {width: 786, height: 1080};
  }
  else if(type === 'sponsor') {
    resizeDimensions = {width: 300, height: 300};
  }

  await Promise.all(
    req.files.map(async file => {
      const newFilename = `image-${Date.now()}-${file.originalname}`;
      await sharp(file.buffer)
        .resize(resizeDimensions.width, resizeDimensions.height)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`/var/www/robotics-club.hmu.gr/HMU_Website/client/public/Uploads/${type}s/${newFilename}`);
      req.body.images.push(newFilename);
    })
  );
  next();
}


// query to make a post
const makePost = async(req,res,next)=>{
    db.execute("INSERT INTO `post`(title,content,post_desc,created_at,type) VALUES(?,?,?,?,?)",[req.body.title,req.body.content,req.body.post_desc,req.body.created_at,req.body.type],(err,user)=>{
      console.log(req.body)
        if(err) {
            throw err;
        }
        db.execute("SELECT `id` FROM post WHERE `title` = ?" , [req.body.title],(err,result)=>{
          if(err){
            throw err;
          }
          let id = result[0].id
          console.log(req.body.images)
          for(const image in req.body.images){
            db.execute("INSERT INTO `postImages`(post_id,img) VALUES(?,?)",[id,req.body.images[image]],(err,result)=>{
              if(err){
                throw err;
              }
            })
          }
          })
        })

  res.send("created post")
}


// query for making a new member
const makeMember = async(req,res,next)=>{
  db.execute("INSERT INTO `member`(academic_id,first_name,last_name,school,subscription_date,role) VALUES(?,?,?,?,?,?)",[req.body.academic_id,req.body.first_name,req.body.last_name,req.body.school,req.body.subscription_date,req.body.role],(err,member)=>{
    console.log(req.body)
    if(err) {
        throw err;
    }
      db.execute("SELECT `academic_id` FROM `member` WHERE `last_name` = ?" , [req.body.last_name],(err,result)=>{
        if(err){
          throw err;
        }
        let academic_id = result[0].academic_id
        console.log(req.body.images)
        for(const image in req.body.images){
          db.execute("INSERT INTO `memberImages`(member_id,img) VALUES(?,?)",[academic_id,req.body.images[image]],(err,result)=>{
            if(err){
              throw err;
            }
        })
      }
  })


})

res.send("created member")
}


// query for making a new sponsor
const makeSponsor = async(req,res,next)=>{
  db.execute("INSERT INTO `sponsors`(sponsor_name,sponsor_desc,sponsor_tier) VALUES (?,?,?)", [req.body.sponsor_name,req.body.sponsor_desc,req.body.sponsor_tier], (err,sponsor) => {
    console.log(req.body);
    if(err) {
      throw err;
    }
    db.execute("SELECT `id` FROM `sponsors` WHERE `sponsor_name` = ?", [req.body.sponsor_name], (err,result) => {
      if(err) {
        throw err;
      }
      let id = result[0].id;
      console.log(req.body.sponsor_image);
      db.execute("INSERT INTO `sponsorImages` (sponsor_id,image) VALUES (?,?)", [id,req.body.sponsor_image], (err,result) => {
        if(err) {
          throw err;
        }
      })
    })
  })

  res.send("Created Sponsor");
}


// query for updating an existing post
const updatePost = async(req,res,next) => {
  const { id } = req.params
  db.execute(`
    UPDATE post
    SET title = ?, post_desc = ?, content = ?
    WHERE id = ?
`,[req.body.title,req.body.post_desc,req.body.content,id], (err,post)=>{
    console.log(req.body);
    if(err) throw err;
    console.log(req.body.images);
    for(const image in req.body.images){
      db.execute("UPDATE postImages SET img = ? WHERE post_id = ?", [req.body.images[image],id], (err,result) => {
        if(err) throw err;
      })
  }
  })

res.send("Updated Post");
}


// query for updating an existing member
const updateMember = async(req,res,next) => {
  const { id } = req.params
  db.execute(`
    UPDATE member
    SET academic_id = ?, first_name = ?, last_name = ?, school = ?,
    subscription = ?, subscription_date = ?, end_date = ?, role = ?
    WHERE academic_id = ?
  `,[req.body.academic_id,req.body.first_name,req.body.last_name,req.body.school,req.body.subscription,req.body.subscription_date,req.body.end_date,req.body.role,id], (err,member)=>{
    console.log(req.body);
    if(err) throw err;
      for(const image in req.body.images){
        db.execute("UPDATE memberImages SET img = ? WHERE member_id = ?", [req.body.images[image],id], (err,result) => {
          if(err) throw err;
        })
      }
    }
  )

  res.send("Updated Member");
}


// query for deleting a post
const deletePost = async(req,res,next) => {
  db.execute(`
    DELETE FROM postImages
    WHERE post_id = ?
  `, [req.body.id], (err,result) => {
    if(err) throw err;
    db.execute(`
      DELETE FROM post
      WHERE id = ?  
    `,[req.body.id], (err,result) => {
      if(err) throw err;
    })
  })

  res.send("Deleted Post");
}


// query for deleting a member
const deleteMember = async(req,res,next) => {
  db.execute(`
    DELETE FROM memberImages
    WHERE member_id = ?
  `, [req.body.academic_id], (err,result) => {
    if(err) throw err;
    db.execute(`
      DELETE FROM member
      WHERE academic_id = ?  
    `,[req.body.academic_id], (err,result) => {
      if(err) throw err;
    })
  })

  res.send("Deleted Member");
}


// query for deleting a sponsor
const deleteSponsor = async(req,res,next) => {
  db.execute(`
    DELETE FROM sponsorImages
    WHERE sponsor_id = ?
  `, [req.body.id], (err,result) => {
    if(err) throw err;
    db.execute(`
      DELETE FROM sponsor
      WHERE id = ?  
    `,[req.body.id], (err,result) => {
      if(err) throw err;
    })
  })

  res.send("Deleted sponsor");
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
    makeSponsor: makeSponsor,
    updateMember: updateMember,
    updatePost: updatePost,
    deleteMember: deleteMember,
    deletePost: deletePost,
    deleteSponsor: deleteSponsor
  }