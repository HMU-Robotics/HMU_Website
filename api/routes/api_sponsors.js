const express = require("express")
const router = express.Router()
const sponsorController = require("../controllers/api_sponsors")
const AuthMiddleware = require("../middleware/api_auth")
const {admin, viewer, editor} = require("../middleware/api_roles")


router.get("/find/sponsors", sponsorController.get_sponsors);

module.exports = router;