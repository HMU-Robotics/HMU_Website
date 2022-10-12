const express = require('express')
const router = express.Router()
const authController = require("../controllers/api_auth")
const loginController = require("../controllers/api_login")


router.post('/register',authController.user_signup)
router.post('/login',authController.user_login)
router.get('/adminLogin',loginController.login_path)
router.post('/adminLogin',loginController.user_login)



module.exports = router;