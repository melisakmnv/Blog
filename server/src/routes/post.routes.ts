import express from "express";
import { createPost, deletePost, getPost, getPosts } from "../controllers/post.controllers";

const router = express.Router();

router.route("/")
    .get(getPosts)
    .post(createPost)


router.route("/:slug")
    .get(getPost)

router.route("/:id")
    .delete(deletePost)


export default router;