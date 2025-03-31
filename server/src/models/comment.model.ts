import mongoose, { Schema, Document, Model } from "mongoose";

interface IComment {

    user: mongoose.Types.ObjectId;
    post: mongoose.Types.ObjectId;
    description : string;
}


const commentSchema: Schema<IComment> = new Schema(
    {
        user: {
            type: Schema.ObjectId,
            ref: "User",
            required: true
        },
        post: {
            type: Schema.ObjectId,
            ref: "Post",
            required: true
        },
        description : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true
    }
)


const CommentModel: Model<IComment> = new Model("Comment", commentSchema);

export default CommentModel;