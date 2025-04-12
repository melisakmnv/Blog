import { JwtPayload } from "jsonwebtoken";
import UserModel from "../../models/user.model";
import { Request } from "express"

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload & { _id: string };
        }
    }
}



export interface IGetUserAuthInfoRequest extends Request {
    user?: JwtPayload & { _id: string }
}