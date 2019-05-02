const PostDAO = require('../dao/postDao');
exports.getPosts = async function (req,res) {
    new PostDAO().getPosts((result) => {
        if(result !== null) {
            res.status(200).json(result);
        } else {
            console.log("error");
        }
    })
}
exports.getPostById = async function (req,res) {
    var id = parseInt(req.params.id);
    new PostDAO().getPostById(id)
    .then(result => {
        if(result !== null) {
        res.status(200).json(result)
        } else {
            res.status(400).send("User not found")
        }
    })
    .catch(error => {
        console.log(error);
    })
}
exports.createPost = async function (req,res) {
    new PostDAO().createPost(req.body)
    .then(result => {
        if(result !== null) {
            res.status(200).json(result)
        } else {
            res.status(400).send("User not created")
        }
    })
}

exports.updatePost = async function (req,res) {
    var id = parseInt(req.params.id);
    new PostDAO().updatePost(id, req.body.post)
    .then(result => {
        if(result !== null) {
            res.status(200).json(result)
        } else {
            res.status(400).send("Error refreshing")
        }
    })
}
exports.deletePost = async function (req,res) {
    var id = req.params.id;
    new PostDAO().deletePost(id)
    .then(result => {
        if (result !== null) {
            res.status(200).json(result);
        }
    })
}