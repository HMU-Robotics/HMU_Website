const express = require('express')
const router = express.Router()
const AuthMiddleware = require("../middleware/auth")
const {admin,viewer,editor} = require("../middleware/roles")
const dashboard_controller = require("../controllers/dashboard")
const check_session = require("../middleware/session")

router.get('/',AuthMiddleware,viewer,check_session,dashboard_controller.get_dashboard)

router.get('/createPost',AuthMiddleware,viewer,check_session)
router.post('/createPost',AuthMiddleware,viewer,check_session)

router.get('/editPost',AuthMiddleware,viewer,check_session)
router.post('/editPost',AuthMiddleware,viewer,check_session)

router.get('/addMember',AuthMiddleware,viewer,check_session)
router.post('/addMember',AuthMiddleware,viewer,check_session)

router.get('/editMember',AuthMiddleware,viewer,check_session)
router.post('/editMember',AuthMiddleware,viewer,check_session)

module.exports = router;