const express = require("express")
const router = express.Router()
const postController = require("../controllers/api_posts")
const AuthMiddleware = require("../middleware/api_auth")
const {admin, viewer, editor} = require("../middleware/api_roles")

router.get("/:id", AuthMiddleware,viewer,postController.find_post)

module.exports = router
