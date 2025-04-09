export interface IPost {
    _id: string;
    cover: string;
    title: string;
    slus: string;
    description: string;
    content: string;
    tag: string[];
    author: string;
    readingTime: string;
    likes: string[];
    comments: string[];
    createdAt: string;
    updatedAt: string;
}