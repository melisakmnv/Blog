import jwt from 'jsonwebtoken';





export const generateToken = (id: string): string => {
    const JWT_SECRET = process.env.JWT_SECRET; // No need for type assertion here
    return jwt.sign({ id }, JWT_SECRET as string, {
        expiresIn: '30 days',
    })
};
