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
	savedPosts: (IPost | string)[];
	followings: (IUser | string)[];
	followers: (IUser | string)[];
	username?: string;
	bio?: string;
	createdAt: string;
	updatedAt: string;
}

export interface IUserSummary {
    _id : string;
    firstname: string; 
    lastname: string; 
    username : string;
    avatar : string
    bio : string;
}