import express from 'express';



export const getUsers = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        res.status(200).json("it works")
    } catch (error) {
        next(error);
    }
};