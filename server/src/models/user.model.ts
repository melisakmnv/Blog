import mongoose, { Schema, Model, Document } from "mongoose";
import bcrypt from "bcryptjs";


interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    avatar?: string;
    savedPost: string[]; // store posts ids
    role: string;
    matchPassword: (enteredPassword: string) => Promise<boolean>;
}


const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        avatar: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Inf60l0egQ8i49C_lylZJl90NVuPLWmG7Q&s"
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        savedPost: {
            type: [String],
            default: []
        },
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