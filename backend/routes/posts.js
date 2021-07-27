const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middlewares/check-auth");

const extractImage = require("../middlewares/imagefile");

const router = express.Router();

router.post("", checkAuth, extractImage, PostController.createPost);

router.put("/:id", checkAuth, extractImage, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
