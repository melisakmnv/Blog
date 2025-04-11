import express from "express";
import UserModel from "../models/user.model";
import { generateToken } from "../lib/generateToken";
import * as cookie from 'cookie';


export const signin = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json('Please enter username and password');
        return;
    }

    const user = await UserModel.findOne({ email });

    if (user && (await user.matchPassword(password))) {

        const token = generateToken(user._id as string)
        const payload = await UserModel.findOne({ email: user.email }).select("-password")
        res.cookie('authToken', token, {
            httpOnly: true,  // Ensures the cookie can't be accessed by JavaScript (good security practice)
            secure: process.env.NODE_ENV === 'production',  // Ensures it's only sent over HTTPS in production
            maxAge: 60 * 60 * 24 * 7,  // Cookie expiration (7 days)
            sameSite: 'strict',  // Protects against CSRF
            path: '/',  // Cookie available throughout the app
        });

        res.status(200).json({
            message: 'Sign in successfully',
            user: payload,
            token: token,
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};


export const signup = async (req: express.Request, res: express.Response) => {
    const { firstname, lastname, email, password } = req.body

    // ========== CHECK USER =========== //

    const user = await UserModel.findOne({ email })
    if (user) {
        res.status(400).json('User already exist')
        return
    }

    // ========== CREATE NEW USER =========== //
    const newUser = await UserModel.create({ firstname, lastname, email, password });
    const payload = await UserModel.findOne({ email: newUser.email }).select("-password")

    const token = generateToken(newUser._id as string);

    // ========== SET JWT TOKEN IN COOKIE ========= //

    res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/',
    });

    res.status(201).json({
        message: 'Sign up successfully',
        // _id: newUser._id,
        // firstname: newUser.firstname,
        // lastname: newUser.lastname,
        // email: newUser.email,
        user: payload,
        token: token
    })
}