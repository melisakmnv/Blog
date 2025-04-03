import mongoose, { Schema, Model, Document } from "mongoose";
import bcrypt from "bcryptjs";


interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    savedPost: string[]; // store posts ids
    role : string;
    matchPassword: (enteredPassword: string) => Promise<boolean>;
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
        },
        role : {
            type : String,
            default : "user"
        }
    },
    {
        timestamps: true
    }
)

userSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// add middleware to encrypt password 

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
})


const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel;