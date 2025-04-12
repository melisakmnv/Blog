import jwt, { JwtPayload } from 'jsonwebtoken';
// import UserModel from "../models/user.model";
import express from "express";


export const authenticate = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const token = req.cookies["authToken"];
  

    if (!token) {
        res.status(401).json({ message: 'Invalid token, unauthorized' });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        if (typeof decoded === 'object' && '_id' in decoded) {
            req.user = decoded as JwtPayload & { _id: string };
            next(); // ✅ ONLY call next here
        } else {
            res.status(401).json({ message: 'Invalid token format' }); // ❌ Don't call next() after this
            return
        }
    } catch (err) {
        res.status(401).json({ message: 'Invalid token, unauthorized' }); // ❌ Same here
        return
    }
};
