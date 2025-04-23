import { IPost } from "./post.interface";

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password : string;
    avatar : string;
    bio : string;
    followers : number;
    followings : number;
}


export interface IUserPayload {
	_id: string;
	firstname: string;
	lastname: string;
	email: string;
	avatar?: string;
	role: 'user' | 'admin';
	savedPosts: IPost[];
	followings: IUser[];
	followers: IUser[];
	username?: string;
	bio?: string;
	createdAt: string;
	updatedAt: string;
}
