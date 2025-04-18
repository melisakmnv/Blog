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
    role: string;
    email : string;
    avatar : string;
    savedPosts : string[];
    createdAt : string;
    updatedAt : string;
    followers : IUserSummary[];
    followings : IUserSummary[];
    username : string;
}

export interface IUserSummary {
    _id : string;
    firstname: string; 
    lastname: string; 
    username : string;
    avatar : string
    bio : string;
}