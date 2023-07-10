const express = require('express')
const router = express.Router()
const AuthMiddleware = require("../middleware/auth")
const {admin,viewer,editor} = require("../middleware/roles")
const dashboard_controller = require("../controllers/dashboard")
const check_session = require("../middleware/session")
const { uploadImages , resizeImages  ,makePost ,makeMember, makeSponsor} = require("../controllers/uploadController")


// TODO fix all edit paths and their db executes



////////////////// Posts //////////////////////////////

router.post('/addPost', AuthMiddleware, viewer, uploadImages, (req, res, next) => {
    resizeImages(req, res, next, 'post');
}, makePost);
router.put('/editPost',AuthMiddleware,viewer,dashboard_controller.post_post)

/////////////////// Members //////////////////////////

router.post('/addMember', AuthMiddleware, viewer, uploadImages, (req, res, next) => {
    resizeImages(req, res, next, 'member');
}, makeMember);

router.put('/editMember',AuthMiddleware,viewer,dashboard_controller.post_member)


/////////////////// Sponsors //////////////////////////

router.post('/addSponsor', AuthMiddleware, viewer, uploadImages, (req,res,next) => {
    resizeImages(req, res, next, 'sponsor');
}, makeSponsor);

// TODO fix all edit paths and db executes
router.put('/editSponsor', AuthMiddleware, viewer);

module.exports = router;