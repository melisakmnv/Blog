import mongoose, { Schema, Model, Document } from "mongoose";


interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    savedPost: string[]; // store posts ids
}


const userSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 20,
        },
        avatar: {
            type: String,
            default: ""
        },
        savedPost: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
)

const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel;