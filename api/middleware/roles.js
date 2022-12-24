const jwt = require("jsonwebtoken") 

function admin(req, res, next) {
    const token = req.cookies["id_ref"]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "1") return res.redirect("/auth/adminLogin");
    next();
}

function editor(req, res, next) {
    const token = req.cookies["id_ref"]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "2") return resres.redirect("/auth/adminLogin")

    next();
}

function viewer(req, res, next) {
    const token = req.cookies["id_ref"]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "3") return res.redirect("/auth/adminLogin")
    next();
}

module.exports = { admin, editor, viewer };