import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.ts";

import userRoutes from "./routes/user.route.ts"
import commentRoutes from "./routes/comment.route.ts"
import postRoutes from "./routes/post.route.ts"
import webHookRoutes from "./routes/webhook.route.ts"
import authRoutes from "./routes/auth.route.ts"

dotenv.config()
connectDB()


const app = express();

app.use('/api/v1/webhooks', webHookRoutes);
app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/comments', commentRoutes);
app.use('/api/v1/auth', authRoutes);


app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(error.status || 500)
    res.json({
        message : error.message || "Something went wrong",
        status : error.status,
        stack : error.stack,
    })
})

const PORT = process.env.PORT





app.listen(PORT, () => console.log(`server is running on port ${PORT}`))