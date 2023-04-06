const jwt = require("jsonwebtoken") 

function admin(req, res, next) {
    const token = req.cookies["id_ref"]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "1") return res.redirect("/auth/AdminLogin");
    next();
}

function editor(req, res, next) {
    const token = req.cookies["id_ref"]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "2") return res.redirect("/auth/AdminLogin")

    next();
}

function viewer(req, res, next) {
    const token = req.cookies["id_ref"]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "3") return res.redirect("/auth/AdminLogin")
    next();
}

module.exports = { admin, editor, viewer };