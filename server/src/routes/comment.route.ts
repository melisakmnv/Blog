import express from "express";
import { getComments } from "../controllers/comment.controllers.ts";

const router = express.Router();

router.route("/")
    .get(getComments)

export default router;