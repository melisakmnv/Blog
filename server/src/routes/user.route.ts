
import express from "express";
import { getUsers } from "../controllers/user.controllers.ts";

const router = express.Router();

router.route("/")
    .get(getUsers)



export default router;