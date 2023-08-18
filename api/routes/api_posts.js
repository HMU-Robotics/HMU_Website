const express = require("express")
const router = express.Router()
const postController = require("../controllers/api_posts")
const AuthMiddleware = require("../middleware/api_auth")
const {admin, viewer, editor} = require("../middleware/api_roles")

router.get("/:id",postController.find_post);
router.get("/find/all/:lang", postController.get_posts);
router.get("/getPostTag", postController.getPostTag);

module.exports = router
