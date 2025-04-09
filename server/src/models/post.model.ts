import mongoose, { Schema, Model } from "mongoose";
import slugify from "slug";



const postSchema = new Schema(
    {
        author: String,
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
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


const PostModel = mongoose.model('Post', postSchema);

export default PostModel;