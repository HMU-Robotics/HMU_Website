const mysql = require("mysql2")
const path = require("path")


const db =  mysql.createPool({
    host:process.env.DB_HOST || "localhost",
    user:process.env.DB_USER || "HMU",
    password:process.env.DB_PASSWORD || 'password',
    database:process.env.DATABASE || 'HMU_ROBOTICS_CLUB',
});


////////////////// Posts //////////////////////////////
exports.get_dashboard = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/Dashboard.html'))
}


exports.get_newpost = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/Post.html'))
}

exports.get_posts = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/editPost.html'))
}

exports.post_newpost = async(req,res,next)=>{

}

exports.post_post = async(req,res,next)=>{

}
/////////////////// Members //////////////////////////

exports.get_newMember = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/Member.html'))
}
exports.get_Members = async(req,res,next)=>{
    return res.sendFile(path.join(__dirname,'../public/Html/editMember.html'))
}


exports.post_newmember = async(req,res,next)=>{

}

exports.post_member = async(req,res,next)=>{

}
