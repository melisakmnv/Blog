import express from "express";
import UserModel from "../models/user.model.ts";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken.ts";


export const signIn = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body

    // ========= CHECK USER IDENTITY ========= //

    if (!email || !password)
        throw new Error('Please enter username and password')

    const user = await UserModel.findOne({ email })
    if (user && (await user.matchPassword(password))) {


        res.status(200).json({
            message: 'Sign in successfully',
            _id: user._id,
            username: user.username,
            role: user.role,
            token: generateToken(user._id as string),
        })
    }

}

export const signUp = async (req: express.Request, res: express.Response) => {
    const { username, email, password } = req.body

    // ========== CHECK USER =========== //

    const user = await UserModel.findOne({ email })
    if (user) throw new Error("This user already exist")

    // ========== CREATE NEW USER =========== //
    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json({
        message: 'Sign up successfully',
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token: generateToken(newUser._id as string),
    })

}