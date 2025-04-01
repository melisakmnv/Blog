import mongoose, { Schema, Model, Document } from "mongoose";

interface IPost extends Document {

    user : mongoose.Types.ObjectId;
    title: string;
    slug: string;
    category: string;
    cover?: string;
    description: string;
    content: string;
    isFeatured: boolean;
    visit: number
}


const postSchema: Schema<IPost> = new Schema(
    {
        user: {
            type: Schema.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        category: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
            default: ""
        },
        description: {
            type: String
        },
        content: {
            type: String,
            required: true
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        visit: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true
    }
)


const PostModel: Model<IPost> = mongoose.model('Post', postSchema);

export default PostModel;