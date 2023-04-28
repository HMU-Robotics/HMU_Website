const express = require("express")
const router = express.Router()
const postController = require("../controllers/api_posts")
const AuthMiddleware = require("../middleware/api_auth")
const {admin, viewer, editor} = require("../middleware/api_roles")

router.get("/:id",postController.find_post)
router.get("/find/latest",postController.get_latest_posts)
router.get("/find/projects",postController.get_projects)
router.get("/find/seminars",postController.get_seminars)

module.exports = router
