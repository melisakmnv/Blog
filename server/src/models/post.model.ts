import mongoose, { Schema, Model, Document } from "mongoose";
import slugify from "slug";


interface IPost extends Document {
    author: string;
    title: string;
    slug?: string;
    cover: string;
    description: string;
    content: string;
    readingTime: string;
    tag: string[];
    likes: string[];
    comments: string[];
}


const postSchema: Schema<IPost> = new Schema(
    {
        author: String,
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
        },
        cover: {
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fHww"
        },
        description: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        readingTime: {
            type: String,
            required: true
        },
        tag: [String],
        likes: [String],
        comments: [String]
    },
    {
        timestamps: true
    }
)


postSchema.pre('save', function (next) {
    if (this.isModified('title')) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});


const PostModel: Model<IPost> = mongoose.model('Post', postSchema);

export default PostModel;