const express =  require("express")
const router = express.Router()
const userController = require("../controllers/api_user")
const AuthMiddleware = require("../middleware/api_auth")
const {admin ,viewer,editor} = require("../middleware/api_roles")

router.get("/:id",userController.find_user)
router.get("/find/all",userController.find_all_users)
router.get('/:id_1/:id_2',userController.find_number_users)


module.exports = router