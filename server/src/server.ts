import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.ts"
import commentRoutes from "./routes/comment.route.ts"
import postRoutes from "./routes/post.route.ts"

dotenv.config()


const app = express();

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/comments', commentRoutes)


const PORT = process.env.PORT



app.listen(PORT, () => console.log(`server is running on port ${PORT}`))