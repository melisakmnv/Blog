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
    savedPost : string[];
    createdAt : string;
    updatedAt : string;
}