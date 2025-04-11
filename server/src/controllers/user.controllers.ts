import express from "express";
import UserModel from "../models/user.model";
import { IGetUserAuthInfoRequest } from "../types/express/index"


export const getProfile = async (req:IGetUserAuthInfoRequest, res: express.Response) => {
    if (!req.user || typeof req.user === 'string') {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const userId = req.user._id;
    const user = await UserModel.findById(userId);

    if (user) {
        res.status(200).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
        });
        return
    } else {
        res.status(404).json("User not found");
        return
    }
};
