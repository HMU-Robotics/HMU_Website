const express = require('express')
const router = express.Router()
const authController = require("../controllers/api_auth")
const loginController = require("../controllers/login")
const check_session = require("../middleware/session")


router.post('/register',authController.user_signup)

//bare jwt token login
router.post('/login',authController.user_login)

//checks if seassion is still active
router.post('/checkSession',check_session)

// sets up cookies too
router.post('/adminLogin',loginController.user_login)



module.exports = router;