import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';

import { connectDB } from "./config/db";

import postRoutes from "./routes/post.routes"
import authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"

dotenv.config()
connectDB()

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: process.env.REACT_APP_URL,
        credentials: true,
    })
);

app.use(cookieParser()); 

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

console.log(typeof authRoutes);

const PORT = process.env.PORT





app.listen(PORT, () => console.log(`server is running on port ${PORT}`))