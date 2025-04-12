import express from "express";
import { getProfile } from "../controllers/user.controllers";
import { authenticate } from "../middlewares/auth.middleware";


const router = express.Router();

router.route("/profile")
    .get(authenticate, getProfile)



export default router;