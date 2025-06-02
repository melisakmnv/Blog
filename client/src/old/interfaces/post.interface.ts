import { IUser, IUserPayload } from "./user.interface";

// New interface for the author structure within a post
export interface IPostAuthor {
    _id: string;
    firstname: string;
    lastname: string;
    avatar: string;
    username: string;
}

export interface IPost {
	_id: string;
	author: IUserPayload;
	title: string;
	slug: string;
	cover: string;
	description: string;
	content: string;
	readingTime: string;
	tag?: string;
	likes: IUser[];
	savedBy: IUser[];
	comments: Comment[];
	createdAt: string;
	updatedAt: string;
}

export interface IPostsResponse {
    posts: IPost[];
    currentPage: number;
    totalPages: number;
    totalPosts: number;
}

export interface IPostForm {
    // cover: string;
    title: string;
    description: string;
    content: string;
    tag: string;
    author: string;
}