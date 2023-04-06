const express = require('express')
const router = express.Router()
const AuthMiddleware = require("../middleware/auth")
const {admin,viewer,editor} = require("../middleware/roles")
const dashboard_controller = require("../controllers/dashboard")
const check_session = require("../middleware/session")
const { uploadImages , resizeImages  ,makePost ,makeMember, test} = require("../controllers/uploadController")


////////////////// Posts //////////////////////////////

router.post('/addPost',AuthMiddleware,viewer,check_session,uploadImages,resizeImages,makePost)
router.put('/editPost',AuthMiddleware,viewer,check_session,dashboard_controller.post_post)
// this is a test will get deleted
router.post('/test',viewer,test)

/////////////////// Members //////////////////////////
router.post('/addMember',AuthMiddleware,viewer,check_session,uploadImages,resizeImages,makeMember)
router.put('/editMember',AuthMiddleware,viewer,check_session,dashboard_controller.post_member)

module.exports = router;