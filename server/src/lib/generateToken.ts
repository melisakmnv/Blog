import jwt from "jsonwebtoken"

interface UserPayload {
    _id : string;
    role : string;
}

export const generateToken = (_id: string): string => {
    const JWT_SECRET = process.env.JWT_SECRET; // No need for type assertion here
    return jwt.sign({ _id }, JWT_SECRET as string, {
        expiresIn: '30 days',
    })
};
