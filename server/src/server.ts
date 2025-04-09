import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db";

import postRoutes from "./routes/post.routes"

dotenv.config()
connectDB()

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("Hello");
});


app.use('/api/v1/posts', postRoutes);


const PORT = process.env.PORT





app.listen(PORT, () => console.log(`server is running on port ${PORT}`))