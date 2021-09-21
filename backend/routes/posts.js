const express = require("express");

const PostController = require("../controllers/posts");

const {
    validateJWT
} = require('../middlewares');

const validateImage = require('../middlewares/validate-image');

const router = express.Router();

router.post("", validateJWT, validateImage, PostController.createPost);

router.put("/:id", validateJWT, validateImage, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", [validateJWT], PostController.deletePost);

module.exports = router;