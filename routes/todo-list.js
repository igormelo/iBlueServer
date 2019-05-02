var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');


/* GET users listing. */
router.get('/', PostController.getPosts)
router.get('/:id', PostController.getPostById)
router.patch('/:id/edit',PostController.updatePost)
router.delete('/:id/delete', PostController.deletePost)

module.exports = router;