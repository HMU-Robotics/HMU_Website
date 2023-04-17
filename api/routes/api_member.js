const express =  require("express")
const router = express.Router()
const memberController = require("../controllers/api_member")

router.get("/:id",memberController.find_member)
router.get("/find/all",memberController.find_all_members)


module.exports = router