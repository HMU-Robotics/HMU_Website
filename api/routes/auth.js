const express = require('express')
const router = express.Router()
const authController = require("../controllers/api_auth")
const loginController = require("../controllers/login")



router.get('/adminLogin',loginController.login_path)
router.post('/adminLogin',loginController.user_login)


module.exports = router;