export interface IPost {
    _id: string;
    cover: string;
    title: string;
    description: string;
    content: string;
    tag: string;
    author: string;
    avatar: string;
    createdAt: string;
    // updatedAt : string;
    readingTime: string;
    likes : number;
    comments : number;
}