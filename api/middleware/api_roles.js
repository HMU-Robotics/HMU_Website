const jwt = require("jsonwebtoken") 

function admin(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "1") return res.status(403).send({
        ok: false,
        error: "Access denied."
    });
    jwt.
    next();
}

function editor(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "2") return res.status(403).send({
        ok: false,
        error: "Access denied."
    });

    next();
}

function viewer(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token,"superS")
    req.userData = decoded
    if (req.userData.roles == "3") return res.status(403).send({
        ok: false,
        error: "Access denied."
    });

    next();
}

module.exports = { admin, editor, viewer };