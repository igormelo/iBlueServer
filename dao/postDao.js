const Post = require('../models/posts');


module.exports = class PostDAO {
    getPosts(callback) {
        Post.getPosts.findAll()
        .then(callback)
        .catch(error => {
            console.log(error)
        })
    }
    getPostById(id) {
       return Post.getPosts.findById(id)
        .then(id)
        .catch(error => {
            console.log(error);
        })
    }
    createPost(body) {
        return Post.getPosts.create(body)
        .then(body)
        .catch(error => {
            console.log(error);
        })
    }
    updatePost(id,body) {
        return Post.getPosts.update(
            {post: body},
            {where: {id: id}}
        )
        .then(body)
        .catch(error => console.log(error));
    }
    deletePost(id) {
        return Post.getPosts.destroy({
            where: {
                id: id
            }
            })
            .then(id)
            .catch((error) => {
                console.log(error);
            })

    }
}