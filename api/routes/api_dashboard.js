const express = require('express')
const router = express.Router()
const AuthMiddleware = require("../middleware/auth")
const {admin,viewer,editor} = require("../middleware/roles")
const { uploadImages , resizeImages  ,makePost ,makeMember, makeSponsor, makePostImages, updatePost, updateMember, deletePost, deleteMember, deleteSponsor} = require("../controllers/uploadController")





////////////////// Posts //////////////////////////////

router.post('/addPost', AuthMiddleware, viewer, uploadImages, (req, res, next) => {
    resizeImages(req, res, next, 'post');
}, makePost);

router.put('/editPost/:id',AuthMiddleware,viewer, updatePost);

router.post('/addPostImages', AuthMiddleware, viewer, uploadImages, (req, res, next) => {
    resizeImages(req, res, next, 'post');
}, makePostImages);

router.delete('/deletePost/:id',AuthMiddleware,viewer,deletePost);

/////////////////// Members //////////////////////////

router.post('/addMember', AuthMiddleware, viewer, uploadImages, (req, res, next) => {
    resizeImages(req, res, next, 'member');
}, makeMember);

router.put('/editMember/:id',AuthMiddleware,viewer, uploadImages, (req, res, next) => {
    resizeImages(req, res, next, 'member');
}, updateMember);

router.delete('/deleteMember/:id',AuthMiddleware,viewer,deleteMember)

/////////////////// Sponsors //////////////////////////

router.post('/addSponsor', AuthMiddleware, viewer, uploadImages, (req,res,next) => {
    resizeImages(req, res, next, 'sponsor');
}, makeSponsor);

router.delete('/deleteSponsor/:id',AuthMiddleware,viewer,deleteSponsor);


module.exports = router;