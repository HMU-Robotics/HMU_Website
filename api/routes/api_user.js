const express =  require("express")
const router = express.Router()
const userController = require("../controllers/api_user")
const AuthMiddleware = require("../middleware/api_auth")
const {admin ,viewer,editor} = require("../middleware/api_roles")

router.get("/:id",AuthMiddleware,viewer,userController.find_user)
router.get("/find/all",AuthMiddleware,viewer,userController.find_all_users)
router.get('/:id_1/:id_2',AuthMiddleware,viewer,userController.find_number_users)


module.exports = router