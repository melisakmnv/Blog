import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db";

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


const PORT = process.env.PORT





app.listen(PORT, () => console.log(`server is running on port ${PORT}`))