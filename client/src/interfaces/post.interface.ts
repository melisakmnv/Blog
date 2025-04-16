import { IUserPayload } from "./user.interface";

export interface IPost {
    _id: string;
    cover: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    tag: string[];
    author: IUserPayload;
    readingTime: string;
    likes: string[];
    comments: string[];
    createdAt: string;
    updatedAt: string;
}


export interface IPostForm {
    // cover: string;
    title: string;
    description: string;
    content: string;
    tag: string;
    author: string;
}