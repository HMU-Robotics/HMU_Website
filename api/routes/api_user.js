const express =  require("express")
const router = express.Router()
const userController = require("../controllers/api_user")


router.get("/:id",userController.find_user)
router.get("/find/all",userController.find_all_users)
router.get('/:id_1/:id_2',userController.find_number_users)
router.get('/eurobot',userController.find_eurobots_team)


module.exports = router