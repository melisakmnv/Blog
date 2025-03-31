import express from "express";
import { getPosts } from "../controllers/post.controllers.ts";

const router = express.Router();

router.route("/")
    .get(getPosts)


export default router;