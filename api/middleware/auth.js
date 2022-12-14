const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')

module.exports = (req,res,next) =>{
    try{
        const token = req.cookies["id_ref"]
        const decoded = jwt.verify(token,"superS")
        req.userData = decoded
        next()
    }
    catch(err){
        return res.redirect("/auth/adminLogin")
    }
}