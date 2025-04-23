import { IUserPayload } from "./user.interface";
import { IPost } from "./post.interface";

export interface IComment {
	_id: string;
	author: IUserPayload | string;
	post: IPost | string;
	content: string;
	likes: (IUserPayload | string)[];
	isEdited: boolean;
	createdAt: string;
	updatedAt: string;
}