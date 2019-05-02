var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');


router.post('/',PostController.createPost)

module.exports = router