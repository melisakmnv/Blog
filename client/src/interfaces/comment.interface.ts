import { IUserPayload } from "./user.interface";

export interface IComment {
    _id: string;
    author: IUserPayload;
    content: string;
}